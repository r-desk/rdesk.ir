function containsAny(str, substringsToContain, substringsToExclude = []) {
  return (
    substringsToContain.some((substring) => str.includes(substring)) &&
    !substringsToExclude.some((substring) => str.includes(substring))
  );
}

function containsAll(str, substrings) {
  return substrings.every((substring) => str.includes(substring));
}

function detectArch(os, agent) {
  console.log(os, agent);
  let architecture;
  if (containsAny(agent, ["64", "long"], ["arm", "aarch"])) {
    // x86_64, x86-64, Intel 64, EM64T, 64-bit x86, ia-64, Long Mode and amd64
    architecture = "x86_64";
  } else if (containsAny(agent, ["iphone", "ipad", "ipod"])) {
    os = "ios";
    architecture = "arm64";
  } else if (containsAny(agent, ["32", "86"])) {
    // IA-32, 80*86, x86, i386, i486, i586, i686
    architecture = "x86";

    if (os == "android") {
      architecture = "x86_64";
    }
  } else if (containsAny(agent, ["arm", "aarch"])) {
    if (containsAny(agent, ["32", "v7", "v8-r", "v8-m", "hf", "eabi", "el"])) {
      architecture = "armv7";
    } else if (containsAny(agent, ["64"])) {
      if (os == "android") {
        architecture = "aarch64";
      } else {
        architecture = "arm64";
      }
    }
  } else {
    architecture = undefined;
  }
  return architecture;
}

function detectUserOS() {
  const userAgent = navigator.userAgent.toLowerCase();

  let os;
  if (containsAny(userAgent, ["win"])) {
    os = "windows";
  } else if (containsAny(userAgent, ["mac", "os x", "macintosh"])) {
    os = "mac";
  } else if (containsAny(userAgent, ["android"])) {
    os = "android";
  } else if (containsAny(userAgent, ["linux", "x11"])) {
    os = "linux";
  } else {
    os = "windows";
  }

  let architecture = detectArch(os, userAgent);
  if ((architecture === undefined) & (os === "android")) {
    let agent = navigator.platform.toLowerCase();
    if (agent) {
      architecture = detectArch(os, agent);
    }
  }

  console.log(os, architecture);

  return {
    os: os,
    arch: architecture,
  };
}
