function detectUserOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const platform = window.navigator.platform.toLowerCase();

    if (userAgent.includes('win')) {
        return 'windows';
    } else if (userAgent.includes('mac') || platform.includes('mac')) {
        return 'mac';
    } else if (userAgent.includes('linux')) {
        return 'linux';
    } else if (userAgent.includes('android')) {
        return 'android';
    } else {
        return 'windows';
    }
}