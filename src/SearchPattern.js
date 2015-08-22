function SearchPattern(pattern) {
    this.filter = "";
    this.pattern = "";

    if (typeof pattern === "string") {
        var regex = /((.+)@|)([^@]+)/;

        var match = regex.exec(pattern);
        if (match !== null) {
            if (match[2] !== undefined) {
                this.filter = match[2];
            }

            this.pattern = match[3];
        }
    }
}
