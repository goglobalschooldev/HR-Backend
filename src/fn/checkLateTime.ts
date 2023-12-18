export const checkLateTime = (start: string, scan: string) => {
    let startTime = parseInt(start.slice(0, 2));
    let scanTime = parseInt(scan.slice(0, 2));
    let startMinute = parseInt(start.slice(3));
    let scanMinute = parseInt(scan.slice(3));

    let h = scanTime - startTime;
    let m = scanMinute - startMinute;

    if (m >= 0) {

        return h + ":" + m
    }

    if (m <= 0) {
        let te = h * 60;
        let last = 0 - m
        let lastmim = te - last;
        let hours = (lastmim / 60);
        let rhours = Math.floor(hours);
        return rhours + ":" + lastmim
    }
}