function toggleDistro(id) {
  const content = document.getElementById(id);
  const chevron = content.querySelector(".chevron");

  document.querySelectorAll(".download-group").forEach((el) => {
    if (el.id !== id) {
      el.querySelector(".group-options").classList.remove("active");
      el.querySelector(".chevron").classList.remove("up");
    }
  });

  content.querySelector(".group-options").classList.toggle("active");
  chevron.classList.toggle("up");
}

document.addEventListener("DOMContentLoaded", function () {
  const downloadOptions = {
    windows: [
      {
        name: "۶۴ بیتی ویندوز",
        desc: "مناسب برای بیشتر کاربران",
        info: "قابلیت اجرا به صورت پرتابل و نصب در سیستم",
        url: "./downloads/rdesk-1.2.4-install.exe",
        arch: "x86_64",
        type: "exe",
      },
      {
        name: "۳۲ بیتی ویندوز",
        desc: "مناسب برای سیستم‌های قدیمی‌تر",
        info: "قابلیت اجرا به صورت پرتابل و نصب در سیستم",
        url: "./downloads/rdesk-sciter-1.2.4-x86.exe",
        arch: "x86",
        type: "exe",
      },
    ],
    mac: [
      {
        name: "Intel Mac",
        desc: "بسته مناسب برای پردازنده‌های اینتل",
        info: "قابلیت اجرا بعد از نصب در سیستم",
        url: "./downloads/rdesk-1.2.4-x64-x86_64.dmg",
        arch: "x86_64",
        type: "dmg",
      },
      {
        name: "Apple Silicon",
        desc: "بسته مناسب برای پردازنده‌های اپل",
        info: "قابلیت اجرا بعد از نصب در سیستم",
        url: "./downloads/rdesk-sciter-1.2.4-amd64.dmg",
        arch: "arm64",
        type: "dmg",
      },
      {
        name: "Apple Silicon (Alt)",
        desc: "بسته مناسب برای پردازنده‌های اپل",
        info: "قابلیت اجرا بعد از نصب در سیستم",
        url: "./downloads/rdesk-1.2.4-arm64.pkg.tar.xz",
        arch: "arm64",
        type: "tar.xz",
      },
    ],
    linux: [
      {
        id: "universal",
        group: "یونیورسال",
        info: "قابلیت اجرا به صورت پرتابل و نصب در سیستم",
        version: "1.2.4",
        options: [
          {
            name: "AppImage (64-bit)",
            desc: "بسته AppImage برای معماری x86_64",
            url: "./downloads/rdesk-1.2.4-x86_64.AppImage",
            arch: "x86_64",
            type: "AppImage",
          },
          {
            name: "AppImage (ARM64)",
            desc: "بسته AppImage برای معماری arm64",
            url: "./downloads/rdesk-1.2.4-arm64.AppImage",
            arch: "arm64",
            type: "AppImage",
          },
        ],
      },
      {
        id: "debian",
        group: "دبیان/اوبونتو",
        info: "قابلیت اجرا بعد از نصب در سیستم",
        version: "1.2.4",
        options: [
          {
            name: "DEB (64-bit)",
            desc: "معماری x86_64 برای دبیان، اوبونتو و...",
            url: "./downloads/rdesk-1.2.4-x86_64.deb",
            arch: "x86_64",
            type: "deb",
          },
          {
            name: "DEB (ARM64)",
            desc: "معماری arm64 برای دبیان، اوبونتو و...",
            url: "./downloads/rdesk-1.2.4-arm64.deb",
            arch: "arm64",
            type: "deb",
          },
        ],
      },
      {
        id: "fedora",
        group: "فدورا/ردهت",
        info: "قابلیت اجرا بعد از نصب در سیستم",
        version: "1.2.4",
        options: [
          {
            name: "RPM (64-bit)",
            desc: "معماری x86_64 برای فدورا، ردهت و...",
            url: "./downloads/rdesk-1.2.4-x86_64.rpm",
            arch: "x86_64",
            type: "rpm",
          },
          {
            name: "RPM (ARM64)",
            desc: "معماری arm64 برای فدورا، ردهت و...",
            url: "./downloads/rdesk-1.2.4-arm64.rpm",
            arch: "arm64",
            type: "rpm",
          },
        ],
      },
      {
        id: "suse",
        group: "اوپن سوزه",
        info: "قابلیت اجرا بعد از نصب در سیستم",
        version: "1.2.4",
        options: [
          {
            name: "RPM (64-bit)",
            desc: "معماری x86_64 برای SUSE",
            url: "./downloads/rdesk-suse-1.2.4-x86_64.rpm",
            arch: "x86_64",
            type: "rpm",
          },
          {
            name: "RPM (ARM64)",
            desc: "معماری arm64 برای SUSE",
            url: "./downloads/rdesk-suse-1.2.4-0-arm64.rpm",
            arch: "arm64",
            type: "rpm",
          },
        ],
      },
    ],
    android: [
      {
        name: "۶۴ بیتی اندروید",
        desc: "مناسب برای بیشتر کاربران",
        info: "قابلیت اجرا بعد از نصب در سیستم",
        url: "./downloads/rdesk-1.2.4-x86_64.apk",
        arch: "x86_64",
        type: "apk",
      },
      {
        name: "arm64 اندروید",
        desc: "مناسب برای دستگاه‌های قدیمی‌تر",
        info: "قابلیت اجرا بعد از نصب در سیستم",
        url: "./downloads/rdesk-1.2.4-aarch64.apk",
        arch: "aarch64",
        type: "apk",
      },
      {
        name: "armv7 اندروید",
        desc: "مناسب برای دستگاه‌های با پردازنده‌های اینتل اتم",
        info: "قابلیت اجرا بعد از نصب در سیستم",
        url: "./downloads/rdesk-1.2.4-armv7.apk",
        arch: "armv7",
        type: "apk",
      },
    ],
  };

  function createButton(option) {
    return `
      <a href="${option.url}" class="download-button">
        <div class="download-foo">
          <div class="download-meta">
            <img src="assets/images/static/download.svg" class="download-icon" alt="Download">
          </div>
          <div class="download-info">
            <span class="download-name">دانلود نسخه ${option.name}</span>
            <span class="download-desc">${option.desc}</span>
          </div>
        </div>
        <div class="download-desc">
          <span class="download-type">.${option.type}</span>
          <span class="download-info">${option.info}</span>
        </div>
      </a>
    `;
  }

  function createButtonTop(option) {
    return `
      <a href="${option.url}" class="download-button">
        <div class="download-foo">
          <div class="download-meta">
            <img src="assets/images/static/download.svg" class="download-icon" alt="Download">
            ${
              option.group
                ? `<span class="download-name nowrap">${option.group} (${option.type})</span>`
                : `<span class="download-name nowrap">دانلود نسخه ${option.name}</span>`
            }
          </div>
          <div class="download-info">
            <span class="download-desc nowrap">${option.info}</span>
          </div>
        </div>
      </a>
    `;
  }

  function createLinuxButton(option) {
    return `
      <a href="${option.url}" class="download-button">
        <div class="download-info">
          <img src="assets/images/static/download.svg" class="download-icon" alt="Download">
          <span class="download-name">.${option.type}</span>
        </div>
        <div class="download-info">
          <span class="download-desc">${option.desc}</span>
        </div>
      </a>
    `;
  }

  function createLinuxGroup(group) {
    return `
      <div id="${group.id}" class="download-group" onClick="toggleDistro('${group.id}')">
        <div class="group-desc">
          <div class="group-title">
            <span class="group-title-name">${group.group}</span>
            <span class="group-title-meta">نسخه ${group.version}</span>
          </div>
          <div class="group-meta">
            <span>${group.info}</span>
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
        <div class="group-options ${group.id == "debian" ? "active" : ""}">
          ${group.options.map((option) => createLinuxButton(option)).join("")}
        </div>
      </div>
    `;
  }

  const versionInfo = document.querySelector(".version-info");

  function showDownloadOptionsTop(os, arch) {
    console.log(os, arch);
    const downloadSectionTop = document.getElementById("download-top");
    downloadSectionTop.insertAdjacentHTML(
      "afterbegin",
      `<img src="assets/images/static/${os}.svg" class="ico-35 img-fluid">`,
    );
    const optionsContainer = document.getElementById("download-options-top");
    let added = false;

    if (os === "linux") {
      // Handle Linux's grouped structure
      downloadOptions[os]?.forEach((group) => {
        group.options?.forEach((option) => {
          if (arch === undefined) {
            optionsContainer.insertAdjacentHTML(
              "afterbegin",
              createButtonTop({
                ...option,
                info: group.info,
                group: group.group,
              }),
            );
            added = true;
          } else if (option.arch === arch) {
            optionsContainer.insertAdjacentHTML(
              "afterbegin",
              createButtonTop({
                ...option,
                info: group.info,
                group: group.group,
              }),
            );
            added = true;
          }
        });
      });
    } else {
      // Handle other OS options (Windows, Mac, Android)
      downloadOptions[os]?.forEach((option) => {
        if (arch === undefined) {
          optionsContainer.insertAdjacentHTML(
            "afterbegin",
            createButtonTop(option),
          );
          added = true;
        } else if (option.arch === arch) {
          optionsContainer.insertAdjacentHTML(
            "afterbegin",
            createButtonTop(option),
          );
          added = true;
        }
      });
    }

    return added;
  }

  function showDownloadOptions(os) {
    const optionsContainer = document.getElementById("download-options");
    optionsContainer.innerHTML = "";

    if (os === "linux") {
      versionInfo.style.display = "none";
      optionsContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="linux-section"></div>`,
      );
      linuxSection = optionsContainer.querySelector(".linux-section");
      downloadOptions[os].forEach((group) => {
        linuxSection.insertAdjacentHTML("beforeend", createLinuxGroup(group));
      });
    } else {
      versionInfo.style.display = "flex";
      downloadOptions[os].forEach((option) => {
        optionsContainer.insertAdjacentHTML("beforeend", createButton(option));
      });
    }

    // Update active state of OS selection
    document.querySelectorAll(".platform-item").forEach((item) => {
      item.classList.toggle("active", item.dataset.os === os);
    });
    if (os == "windows") {
      optionsContainer.insertAdjacentHTML("afterend", warning());
    } else {
      let warnContainer = document.querySelector(".warning-container");
      if (warnContainer) {
        warnContainer.style.display = "none";
      }
    }
  }

  // Initialize downloads
  const { os, arch } = detectUserOS();
  showDownloadOptions(os);
  showDownloadOptionsTop(os, arch);

  // Add click handlers for OS selection
  document.querySelectorAll(".platform-item").forEach((button) => {
    button.addEventListener("click", () => {
      showDownloadOptions(button.dataset.os);
    });
  });
});

const warning = () => `
  <div class="warning-container">
      <div class="warning-content">
          <div class="warning-icon">⚠️</div>
          <div class="warning-text">
              <p>نسخه ۶۴ بیتی مناسب اکثر کاربران ویندوز است. در صورت مواجه شدن با هر یک از خطاهای زیر، نسخه ۳۲ بیتی را دانلود و نصب کنید:</p>
              <ul class="error-list">
                  <li>The application was unable to start correctly (0xc0000005)</li>
                  <li>The application failed to initialize properly (0xc0000142)</li>
                  <li>Entry Point Not Found - The procedure entry point could not be located</li>
                  <li>Windows cannot access the specified device, path, or file (Error Code: 0x0000005)</li>
              </ul>
          </div>
      </div>
  </div>
`;
