"use strict";

import stylesheet from "./overview.css";

class Overview {
    
    constructor(app){
        this.app = app;
    }

    onShow() {
        // Anzuzeigende HTML-Elemente ermitteln
        let section = document.querySelector("#overview").cloneNode(true);

        let content = {
            className: "overview",
            main: section.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Übersicht";
    }
}

export default Overview;
