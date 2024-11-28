document.addEventListener("DOMContentLoaded", function () {
  const downloadOptions = {
    windows: [
      {
        name: ".exe",
        desc: "بسته مناسب برای ویندوز 64 بیتی",
        url: "./downloads/rdesk-1.2.4-install.exe",
        arch: "x86_64",
      },
      {
        name: ".exe",
        desc: "بسته مناسب برای ویندوز ۳۲ بیتی",
        url: "./downloads/rdesk-sciter-1.2.4-x86.exe",
        arch: "x86",
      },
    ],
    mac: [
      {
        name: ".dmg",
        desc: "بسته مناسب برای پردازنده‌های اینتل",
        url: "./downloads/rdesk-1.2.4-x64-x86_64.dmg",
        arch: "x86_64",
      },
      {
        name: ".dmg",
        desc: "بسته مناسب برای پردازنده‌های اپل",
        url: "./downloads/rdesk-sciter-1.2.4-amd64.dmg",
        arch: "arm64",
      },
      {
        name: ".tar.xz",
        desc: "بسته مناسب برای پردازنده‌های اپل",
        url: "./downloads/rdesk-1.2.4-arm64.pkg.tar.xz",
        arch: "arm64",
      },
    ],
    linux: [
      {
        name: ".AppImage",
        desc: "بسته AppImage برای معماری x86_64",
        url: "./downloads/rdesk-1.2.4-x86_64.AppImage",
        arch: "x86_64",
      },
      {
        name: ".AppImage",
        desc: "بسته AppImage برای معماری arm64",
        url: "./downloads/rdesk-1.2.4-arm64.AppImage",
        arch: "arm64",
      },
      {
        name: ".deb",
        desc: "معماری x86_64 برای دبیان، اوبونتو و...",
        url: "./downloads/rdesk-1.2.4-x86_64.deb",
        arch: "x86_64",
      },
      {
        name: ".deb",
        desc: "معماری arm64 برای دبیان، اوبونتو و...",
        url: "./downloads/rdesk-1.2.4-arm64.deb",
        arch: "arm64",
      },
      {
        name: ".rpm",
        desc: "معماری x86_64 برای فدورا، ردهت و...",
        url: "./downloads/rdesk-1.2.4-x86_64.rpm",
        arch: "x86_64",
      },
      {
        name: ".rpm",
        desc: "معماری arm64 برای فدورا، ردهت و...",
        url: "./downloads/rdesk-1.2.4-arm64.rpm",
        arch: "arm64",
      },
      {
        name: ".rpm",
        desc: "معماری x86_64 برای SUSE",
        url: "./downloads/rdesk-suse-1.2.4-x86_64.rpm",
        arch: "x86_64",
      },
      {
        name: ".rpm",
        desc: "معماری arm64 برای SUSE",
        url: "./downloads/rdesk-suse-1.2.4-0-arm64.rpm",
        arch: "arm64",
      },
      {
        name: ".flatpak",
        desc: "بسته flatpak برای معماری x86_64",
        url: "./downloads/rdesk-1.2.4-x86-64.flatpak",
        arch: "x86_64",
      },
    ],
    android: [
      {
        name: ".apk",
        desc: "معماری x86_64 برای اندروید",
        url: "./downloads/rdesk-1.2.4-x86_64.apk",
        arch: "x86_64",
      },
      {
        name: ".apk",
        desc: "معماری aarch64 برای اندروید",
        url: "./downloads/rdesk-1.2.4-aarch64.apk",
        arch: "aarch64",
      },
      {
        name: ".apk",
        desc: "معماری armv7 برای اندروید",
        url: "./downloads/rdesk-1.2.4-armv7.apk",
        arch: "armv7",
      },
    ],
  };

  function createButton(option) {
    return `
      <a href="${option.url}" class="btn btn-md btn-orange-red m-1 text-center tra-white-hover">
        <div class="ico-20">
          <img src="assets/images/static/download.svg" class="img-fluid white-color" alt="Download icon">
          <p class="tra-white-hover white-color p-sm">${option.name}</p>
        </div>
        <p class="tra-white-hover p-xs white-color">${option.desc}</p>
      </a>
    `;
  }

  function showDownloadOptionsTop(os, arch) {
    const downloadSectionTop = document.getElementById("download-top");
    downloadSectionTop.insertAdjacentHTML(
      "afterbegin",
      `<img src="assets/images/static/${os}.svg" class="ico-35 img-fluid">`,
    );

    const optionsContainer = document.getElementById("download-options-top");
    let added = false;
    downloadOptions[os]?.forEach((option) => {
      if (arch === undefined) {
        optionsContainer.insertAdjacentHTML("afterbegin", createButton(option));
        added = true;
      } else if (option.arch === arch) {
        optionsContainer.insertAdjacentHTML("afterbegin", createButton(option));
        added = true;
      }
    });

    if (!added) {
      downloadSectionTop.innerHTML = `
        <a href="#download"
                                                class="btn btn-md btn-orange-red tra-white-hover mr-15">سریع‌ترین
                                                نرم‌افزار ریموت
                                                دسکتاپ را دانلود کنید</a>
        `;
      optionsContainer.style.display = "none";
    }
  }

  function showDownloadOptions(os) {
    const optionsContainer = document.getElementById("download-options");
    optionsContainer.innerHTML = "";

    downloadOptions[os].forEach((option) => {
      optionsContainer.insertAdjacentHTML("beforeend", createButton(option));
    });

    document
      .querySelectorAll(".os-selection img")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelector(`.os-selection img[data-os="${os}"]`)
      .classList.add("active");
  }

  const { os, arch } = detectUserOS();

  showDownloadOptions(os);
  showDownloadOptionsTop(os, arch);

  document.querySelectorAll(".os-selection img").forEach((button) => {
    button.addEventListener("click", function () {
      showDownloadOptions(this.dataset.os);
    });
  });
});
