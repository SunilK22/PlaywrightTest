

export class helper {

    static getCurrentTimestamp() {
        const timestamp = new Date().toISOString().replace(/:/g, '-');
        return timestamp;
    }
}