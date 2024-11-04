function detectUserOS() {
    const userAgent = navigator.userAgent.toLowerCase();

    function containsAny(str, substringsToContain, substringsToExclude = []) {
        return (
            substringsToContain.some((substring) => str.includes(substring)) &&
            !substringsToExclude.some((substring) => str.includes(substring))
        );
    }

    function containsAll(str, substrings) {
        return substrings.every((substring) => str.includes(substring));
    }

    let os;
    console.log(userAgent);
    if (containsAny(userAgent, ["win"])) {
        os = "windows";
    } else if (containsAny(userAgent, ["mac"])) {
        os = "mac";
    } else if (containsAny(userAgent, ["linux", "x11"])) {
        os = "linux";
    } else if (containsAny(userAgent, ["andoird"])) {
        os = "android";
    } else {
        os = "windows";
    }

    let architecture;
    if (containsAny(userAgent, ["64", "long"], ["arm", "a64"])) {
        // x86_64, x86-64, Intel 64, EM64T, 64-bit x86, ia-64, Long Mode and amd64
        architecture = "x86_64";
    } else if (containsAny(userAgent, ["32", "86"])) {
        // IA-32, 80*86, x86, i386, i486, i586, i686
        architecture = "x86";
    } else if (containsAny(userAgent, ["arm", "aarch"])) {
        if (
            containsAny(userAgent, ["32", "v7", "v8-r", "v8-m", "hf", "eabi", "el"])
        ) {
            architecture = "armv7";
        } else if (containsAny(userAgent, ["64"])) {
            if (os == "android") {
                architecture = "aarch64";
            } else {
                architecture = "arm64";
            }
        }
    } else {
        architecture = undefined;
    }

    return {
        os: os,
        arch: architecture,
    };
}
