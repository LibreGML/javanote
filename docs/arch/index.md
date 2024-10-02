## 制作启动盘:

1. 去[官网](https://archlinux.org/download/)下载 china tuna ISO 镜像，插入 U 盘。
2. 用`lsblk`查看 U 盘信息，找到插入的 U 盘。
3. 将该 U 盘取消挂载，如`umount /dev/sda`
4. 将镜像文件写入 U 盘，`sudo dd if=***.iso  of=/dev/sda`

---

## 基本系统安装:

1. 进入 BIOS，选择 UEFI 启动
2. 禁止终端蜂鸣器: `rmmod pcspkr`
3. 确认是否为 UEFI 模式:`ls /sys/firmware/efi/efivars`
4. 联网: `iwctl`进入交互式，`device list`查看网卡名，比如 wlan0，`station wlan0 scan`扫描网络，`station wlan0 get-networks`列出网络，`station wlan0 connect wifi-name`联网，`exit`退出，`ping bing.com`查看是否联网。
5. 校时: `timedatectl set-ntp true`，`timedatectl status`验证是否成功
6. 换源: `vim /etc/pacman.d/mirrorlist`，`Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch # 清华大学开源软件镜像站`
7. 转换磁盘为 GPT 类型:`parted /dev/nvmexn1`， 输入`mktable`，然后 gpt，yes，最后 quit
8. `cfdisk`，先建立 512MB 的 EFI 分区，再创建大于内存 60％的 swap 分区，最后剩余空间全部分给 btrfs 系统分区。
9. 格式化 EFI 分区:`mkfs.fat -F32 /dev/nvmexn1p1`，格式化 swap 分区`mkswap /dev/nvmexn1p2`，`mkfs.btrfs -L myArch /dev/nvmexn1p3`。
10. 创建 btrfs 子卷:，先挂载 btrfs 分区到/mnt:， `mount -t btrfs -o compress=zstd /dev/nvmexn1p3 /mnt`，`df -h`查看是否挂载成功，`btrfs subvolume create /mnt/@ ` 创建根目录子卷，`btrfs subvolume create /mnt/@home` 创建 home 子卷，`btrfs subvolume list -p /mnt`，查看挂载情况。将/mnt 卸载以挂载子卷，`umount /mnt`。
11. 挂载各分区和以及子卷`mount -t btrfs -o subvol=/@,compress=zstd /dev/nvmexn1p3 /mnt` 挂载 / 目录。 `mkdir /mnt/home` ，创建 /home 目录，`mount -t btrfs -o subvol=/@home,compress=zstd /dev/nvmexn1p3 /mnt/home` ， 挂载 /home 目录。`mkdir -p /mnt/boot` # 创建 /boot 目录，`mount /dev/nvmexn1p1  /mnt/boot` # 挂载 /boot 目录。`swapon /dev/nvmexn1p2` # 挂载交换分区。`df -h`查看挂载情况，`free -h`查看交换分区挂载情况。
12. 安装基础包和基础软件: `pacstrap /mnt base base-devel linux linux-firmware btrfs-progs networkmanager neovim sudo zsh zsh-completions pacman`。
13. 根据挂载情况生成定义磁盘分区的文件/etc/fstab，`genfstab -U /mnt > /mnt/etc/fstab`，要确保无误`cat /mnt/etc/fstab`
14. 切换到新安装的系统，`arch-chroot /mnt`
15. 设置主机名和时区，`nvim /etc/hostname`，键入主机名，如 tzgml，然后`nvim /etc/hosts`，输入如下:

```shell
127.0.0.1   localhost
::1         localhost
127.0.1.1   tzgml.localdomain tzgml
```

1. 设置时区，`ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime`
2. 将系统时间同步到硬件时间，`hwclock --systohc`。
3. 设置 locale，`nvim /etc/locale.gen`，去掉`en_US.UTF-8 UTF-8`和` zh_CN.UTF-8 UTF-8` 注释，然后生成 locale: `locale-gen`，设置 locale: `echo 'LANG=en_US.UTF-8'  > /etc/locale.conf`，在这里先不能设置中文 locale。
4. ` passwd root`，为 root 设置密码。
5. `pacman -S amd-ucode`安装显卡微码，比如 amd。
6. 安装引导程序，`pacman -S grub efibootmgr os-prober`，安装 grub 到 efi 分区，`grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=ARCH`，编辑`nvim /etc/default/grub`，`GRUB_CMDLINE_LINUX_DEFAULT`把`quiet`去掉改成`nowatchdog`，`loglevel`从 3 改成 5。再加入一行`GRUB_DISABLE_OS_PROBER=false`引导 win10。禁用子菜单`GRUB_DEFAULT_SUBMENU=y`，缩短启动时间`GRUB_TIMEOUT=2`，更改系统名称`GRUB_DISTRIBUTOR="Arch"`，最终生成 grub 配置文件，`grub-mkconfig -o /boot/grub/grub.cfg`
7. `exit`退出 chroot 环境，换到 iso 中。`umount -R /mnt`，卸载新分区，拔掉 U 盘，`reboot`重启进入 arch。第一阶段安装结束。

---

## 系统初始化

1. 重启后进入 tty1，root 为账户名，登录后联网: `systemctl enable --now NetworkManager`设置网络管理器开机自启，`nmcli dev wifi list `用于显示附近的 Wi-Fi ，`nmcli dev wifi connect "Wi-Fi名" password "网络密码"`联网，然后 ping 个地址测试。
2. `pacman -Syyu`，更新整个系统
3. 增加普通用户:`useradd -m -G wheel -s /bin/bash tzgml`，`passwd tzgml`设置密码，更改 sudo 设置`sudo nvim /etc/sudoers`，把`%wheel ALL=(ALL:ALL) NOPASSWD: ALL`和`%sudo ALL=(ALL) NOPASSWD: ALL`和`ALL ALL=(ALL) NOPASSWD: ALL`改成上述模样并取消注释，当然根据具体情况调整，主要是加 NOPASSWD 参数。然后`su tzgml`切换到普通用户。
4. 配置 pacman，`sudo nvim /etc/pacman.conf`，去掉 color 注释开启彩色输出，然后`CleanMethod = KeepCurrent`减少缓存包保留，`ParallelDownloads = 同时下载数量`开启并行下载。最后去掉`[multilib]`那两行的注释开启 32 位库支持，末尾添加 archlinuxcn 源，最后别忘`pacman -Syyu`:

```shell
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch # 清华大学开源软件镜像站
```

5. 在本地信任 farseerfc 的 key，`sudo pacman-key --lsign-key "farseerfc@archlinux.org"`，然后`sudo pacman -Syyu`，然后安装`sudo pacman -S archlinuxcn-keyring`，再`sudo pacman -Syyu`
6. 安装基础功能包如下:

```shell
sudo pacman -S sof-firmware alsa-firmware alsa-ucm-conf # 声音固件
sudo pacman -S ntfs-3g # 可识别 NTFS 格式硬盘
sudo pacman -S wqy-zenhei # 上文泉驿字体解决大多 wine 应用中文方块的问题
sudo pacman -S noto-fonts noto-fonts-cjk noto-fonts-emoji noto-fonts-extra # 谷歌开源字体及表情
sudo pacman -S yay #AUR助手
sudo pacman -S nerd-fonts-victor-mono #nerd字体zsh主体和nvim的powerline乱码
sudo pacman -S noto-fonts-emoji #解决不显示emoji的问题，如果还不显示，则fc-cache，然后reboot
yay -S  ttf-harmonyos-sans #鸿蒙字体，解决hcml乱码
```

7. 安装桌面环境，比如 hyprland，如下:

```shell
git clone --depth=1 https://github.com/JaKooLit/Arch-Hyprland.git
cd Arch-Hyprland
chmod +x install.sh
./install.sh
```

或者 plasma，安装`pacman -S plasma-meta plasma-workspace xdg-desktop-portal konsole dolphin ark packagekit-qt6 packagekit appstream-qt appstream `，N 卡用户要装`egl-wayland`。装完桌面要`systemctl enable --now sddm`，进入 sddm 再进桌面。检查家目录，`Desktop Documents Downloads Music Pictures Videos` 8. 启用蓝牙`sudo systemctl enable --now bluetooth` 9. 安装 AMD 显卡驱动: `sudo pacman -S mesa lib32-mesa xf86-video-amdgpu vulkan-radeon lib32-vulkan-radeon` 10. 更改系统语言为中文: `sudo nvim /etc/locale.gen`，添加`zh_CN.UTF-8 UTF-8`，然后`sudo locale-gen`，然后`sudo nvim /etc/environment`，添加`LANG=zh_CN.UTF-8`。 11. `sudo nvim /etc/systemd/system.conf`，找到`DefaultTimeoutStopSec`和`DefaultTimeoutStartSec`，取消注释，值改成 30s，然后`sudo systemctl daemon-reload`，改变开关机被阻碍问题。 12. `sudo nvim /etc/systemd/journald.conf`，然后`Storage=none`，之后`sudo journalctl --vacuum-size=0M && sudo journalctl --vacuum-time=0s`，`sudo rm -rf /var/log/* && sudo rm -rf /run/log/journal/*`。然后`sudo pacman -Scc  && yay -Scc`，然后`sudo paccache -rk0[[]]`。 13. 重启检查，基础系统安装完毕！

---

## 配置代理

v2ray:

1. 安装 v2ray 与 v2raya:`sudo pacman -S v2ray v2raya`
2. 设置开机启动并立刻执行，`sudo systemctl enable --now v2ray v2raya`
3. 打开浏览器进入 127.0.0.1:2017
4. 打开机场，导出订阅，并寻找节点列表

- [ikuuuvpn 免费 50GB/月](https://ikuuu.pw/)
- [ecycloud10GB/月免费](https://owo.ecycloud.com/auth/register?code=kApr4ea5GB)
- 将节点 vmess 链接复制到 v2ray 的 SERVER 中，点击设置，透明代理和规则端口的分流模式选择大陆白名单模式，透明代理实现方式选择 tproxy，需要 docker 则选择 redirect。防止 DNS 污染选择 DOH。

5. 点击启动，去谷歌测试

clash:

1. `sudo pacman -S clash  clash-geoip  clash-meta clash-verge`
2. 开启系统代理，Tun 模式，局域网连接和 ipv6，导入配置文件或链接，点击使用，再去测试里一键测试。
3. [GLADOS 机场](https://www.glados.rocks/)

> [!IMPORTANT]
> 终端可能不遵循代理配置,导入环境变量: export HTTP_PROXY="http://127.0.0.1:7897" && export HTTPS_PROXY="https://127.0.0.1:7897"

## 更换内核

一, 从源中直接安装:

1. 安装 linux-xanmod-lts 内核 `sudo pacman -S linux-xanmod linux-xanmod-headers`
2. 卸载 linux 原版内核，`sudo pacman -Rns linux linux-firmware`
3. 更新 grub 配置，`grub-mkconfig -o /boot/grub/grub.cfg`，这一步一定要有！否则删除旧内核后会进不了系统！如果忘了进入 iso，挂载 btrfs 分区到/mnt，再挂载 boot 分区到/mnt/boot，然后`arch-chroot /mnt`，然后`grub-mkconfig -o /boot/grub/grub.cfg`，然后 umount，拔掉 U 盘 reboot。
4. `reboot`选择 xanmod 内核回车进入
5. 查看当前系统内核 `uname -a`

二, makepkg
查看 CPU 支持到 v 几: `/lib/ld-linux-x86-64.so.2 --help `
输出的最后几行如下:

```
Subdirectories of glibc-hwcaps directories, in priority order:
x86-64-v4
x86-64-v3 (supported, searched)
x86-64-v2 (supported, searched)\
```

查看 CPU 线程,并修改 makepkg 配置:
`nproc --all`
`nvim /etc/makepkg.conf`
`MAKEFLAGS="-j16"`

克隆并 makepkg:
`git clone https://aur.archlinux.org/linux-xanmod.git`
再`cd linux-xanmod`
修改 PKGBUILD:

```
//intel改成98,AMD改成99 // [!code focus]
if [ -z ${_microarchitecture+x} ]; then
  _microarchitecture=0  // [!code focus]
fi

archlinux改成y  // [!code focus]
if [ -z ${use_tracers+x} ]; then
  use_tracers=n // [!code focus]
fi

//在第一行上面添加一句`_compiler=clang` 环境变量  // [!code focus]
//_compiler=clang // [!code focus]
if [ "${_compiler}" = "clang" ]; then  // [!code focus]
  _compiler_flags="CC=clang HOSTCC=clang LLVM=1 LLVM_IAS=1"
fi

//按照`/lib/ld-linux-x86-64.so.2 --help `推荐修改v几  // [!code focus]
if [ -z ${_config+x} ]; then
  _config=config_x86-64-v2 // [!code focus]
fi

//开启zstd,改成y   // [!code focus]
# Compress modules with ZSTD (to save disk space)
if [ -z ${_compress_modules+x} ]; then
  _compress_modules=n   // [!code focus]
fi
```

想要裁剪内核参考如下,用 modprobed-db:
[modprobed-db AUR](https://aur.archlinux.org/packages/modprobed-db)和
[modprobed-db wiki](https://wiki.archlinux.org/index.php/Modprobed-db)
,再修改使用本地模块配置为 y

```
if [ -z ${_localmodcfg} ]; then
\_localmodcfg=n // [!code focus]
fi
```

最后`makepkg`,会报缺依赖，arch 默认不包含 clang 那套东西的，手动 pacman -S 装上就好了

## 配置输入法

1. 安装 fcitx:

```
sudo pacman -S fcitx5-im # 输入法基础包组
sudo pacman -S fcitx5-chinese-addons # 官方中文输入引擎
sudo pacman -S fcitx5-material-color # 输入法主题
```

2. 设置环境变量: `sudo vim /etc/environment`，写入:

```
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
SDL_IM_MODULE=fcitx
GLFW_IM_MODULE=ibus
```

3. 进入设置，点击语言和区域设置。再点击输入法，点击添加输入法添加拼音，配置拼音，勾选启用云拼音，配置云拼音，后端选择百度，把将嵌入预编辑文本的光标固定在开头那个选项去掉，启用预测，预测个数为 50。
4. 之后退出来选择配置全局选项，将切换"启用/禁用输入法"的快捷键换为左 shift，应用。
5. 点击右下角托盘的输入法。右键选择重新启动，之后按左 shift 或者右键选拼音，测试输入中文。
6. 安装 nord 主题美化:

```
git clone https://github.com/tonyfettes/fcitx5-nord.git
mkdir -p ~/.local/share/fcitx5/themes/
cd fcitx5-nord
cp -r Nord-Dark/ Nord-Light/ ~/.local/share/fcitx5/themes/
```

之后进入 fcitx 配置界面，点击配置附加组件，配置经典用户界面，把主题换成 Nord-Dark。
或者直接`yay -S fcitx5-skin-fluentdark-git `

## nvim

`cd .local/share`
`rm -rf nvim`
`cd ~`
`cd .config`
`git clone`
`nvim`
之后会自动装插件
后续键入`:Mason`装插件，输入`/`开始搜索，键入 i 下载，X 删除，JS 推荐使用 vtsls

## Shell

1. 安装 zsh:`sudo pacman -Sy zsh`
2. 更改默认终端:`chsh -s /usr/bin/zsh`
3. 安装 oh-my-sh: `sh -c "$(curl -fsSL https://gitee.com/pocmon/ohmyzsh/raw/master/tools/install.sh)"`
4. 安装插件`git clone https://gitee.com/asddfdf/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting` 和 `git clone https://gitee.com/chenweizhen/zsh-autosuggestions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions`
5. `nvim .zshrc` ，之后`plugins=(git z zsh-syntax-highlighting zsh-autosuggestions)`
6. 安装字体:` sudo pacman -S oh-my-zsh-powerline-theme-git`
7. 配置 zsh `nvim .zshrc`，设置随机自选主题，将 ZSH_THEME_RANDOM_CANDIDATES=("ys" "mikeh" "jonathan" "af-magic" "alanpeabody" ) ，再 ZSH_THEME="random"即可。
   `

## wine:

- 安装与配置:

```
sudo pacman -S wine wine-mono wine_gecko
```

```
sudo wine winecfg
```

- 启动应用:`wine .exe`或右键 exe 文件选择`使用wine windows program loader打开`即可
- 将 windows 的 C:\Windows\Fonts 的字体文件全部复制到 linux 下的～/.wine/drive_c/windows/Fonts 中，解决 winecfg 乱码问题。

## MineCraft

安装启动器 : `sudo pacman -S hmcl`
打开会乱码，安装字体: `yay -S ttf-harmonyos-sans`

- 添加一个离线账户
- 进入设置到全局游戏设置，将启动器进入设置到全局游戏设置，将启动器可见性设置为`隐藏启动器并在游戏结束后重新打开`，自定义外观，进入下载版本列表源勾选自动选择下载源，尽量使用官方源。
- 下载游戏包，玩模组多的安装 forge，光影安装 Optifnie(我的电脑无法装光影)，安装。
- 启动游戏，弹出警告则选择继续启动。

## 内存与存储

### 开启 zram:

1. `sudo pacman -S zram-generator`
2. `touch /etc/systemd/zram-generator.conf`
3. `nvim /etc/systemd/zram-generator.conf`

```
[zram0]
zram-size = ram / 2
compression-algorithm = lz4
```

### btrfs 透明压缩

`sudo pacman -S btrfs-progs`
`sudo btrfs filesystem defragment -r -v -czstd /`

## plymouth

安装 plymouth 包: `sudo pacman -S plymouth`  
添加内核参数:`sudo nvim /etc/default/grub`如下:

```
GRUB_CMDLINE_LINUX_DEFAULT="loglevel=1 quiet nowatchdog splash rd.udev.log_priority=3 vt.global_cursor_default=0 fbcon=nodefer"
```

添加钩子:`sudo nvim /etc/mkinitcpio.conf`
添加`HOOKS=(... plymouth ...)`

查看自带主题:`plymouth-set-default-theme -l`  
设置主题:`plymouth-set-default-theme -R theme`

## sddm

依赖:(qt6-5compat qt6-declarative qt6-svg sddm)

```
sudo git clone https://github.com/keyitdev/sddm-astronaut-theme.git /usr/share/sddm/themes/sddm-astronaut-theme
```

```
sudo cp /usr/share/sddm/themes/sddm-astronaut-theme/Fonts/* /usr/share/fonts/
```

```
echo "[Theme]
Current=sddm-astronaut-theme" | sudo tee /etc/sddm.conf
```

## grub

1. 去[gnome-look](https://www.gnome-look.org/p/2142488)下载主题.
2. 解压拷贝到/boot/grub/themes/
3. `nvim /etc/default/grub`修改`GRUB_THEME=/boot/grub/themes/(theme-name)/theme.txt`
4. 更新 grub 配置: `sudo grub-mkconfig -o /boot/grub/grub.cfg`
