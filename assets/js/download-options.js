document.addEventListener('DOMContentLoaded', function () {
    const downloadOptions = {
        windows: [
            { name: 'ویندوز (x86/x64)', url: './downloads/rdesk-1.2.4-install.exe' },
            { name: 'ویندوز (Sciter x86)', url: './downloads/rdesk-sciter-1.2.4-x86.exe' }
        ],
        mac: [
            { name: 'مک (x86_64)', url: './downloads/rdesk-1.2.4-x64-x86_64.dmg' },
            { name: 'مک (Sciter AMD64)', url: './downloads/rdesk-sciter-1.2.4-amd64.dmg' },
            { name: 'مک (ARM64)', url: './downloads/rdesk-1.2.4-arm64.pkg.tar.xz' }
        ],
        linux: [
            { name: 'لینوکس (AppImage x86_64)', url: './downloads/rdesk-1.2.4-x86_64.AppImage' },
            { name: 'لینوکس (AppImage ARM64)', url: './downloads/rdesk-1.2.4-arm64.AppImage' },
            { name: 'لینوکس (Debian x86_64)', url: './downloads/rdesk-1.2.4-x86_64.deb' },
            { name: 'لینوکس (Debian ARM64)', url: './downloads/rdesk-1.2.4-arm64.deb' },
            { name: 'لینوکس (RPM x86_64)', url: './downloads/rdesk-1.2.4-x86_64.rpm' },
            { name: 'لینوکس (RPM ARM64)', url: './downloads/rdesk-1.2.4-arm64.rpm' },
            { name: 'لینوکس (SUSE x86_64)', url: './downloads/rdesk-suse-1.2.4-x86_64.rpm' },
            { name: 'لینوکس (SUSE ARM64)', url: './downloads/rdesk-suse-1.2.4-0-arm64.rpm' },
            { name: 'لینوکس (Flatpak)', url: './downloads/rdesk-1.2.4-x86-64.flatpak' }
        ],
        android: [
            { name: 'اندروید (x86_64)', url: './downloads/rdesk-1.2.4-x86_64.apk' },
            { name: 'اندروید (AArch64)', url: './downloads/rdesk-1.2.4-aarch64.apk' },
            { name: 'اندروید (ARMv7)', url: './downloads/rdesk-1.2.4-armv7.apk' }
        ]
    };

    function showDownloadOptions(os) {
        const optionsContainer = document.getElementById('download-options');
        optionsContainer.innerHTML = '';
        downloadOptions[os].forEach(option => {
            const button = document.createElement('a');
            button.href = option.url;
            button.className = 'btn btn-md btn-orange-red tra-white-hover m-1';
            button.textContent = option.name;
            optionsContainer.appendChild(button);
        });

        document.querySelectorAll('.os-selection button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.os-selection button[data-os="${os}"]`).classList.add('active');
    }

    const userOS = detectUserOS();

    showDownloadOptions(userOS);

    document.querySelectorAll('.os-selection button').forEach(button => {
        button.addEventListener('click', function () {
            showDownloadOptions(this.dataset.os);
        });
    });
});