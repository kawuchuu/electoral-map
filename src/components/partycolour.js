const partyColour = party => {
    switch (party) {
        case "Australian Labor Party": {
            return "#de3533"
        }
        case "Liberal Party of Australia": {
            return "#0047ab"
        }
        case "The Australian Greens": {
            return "#10c25b"
        }
        case "National": {
            return "#006644"
        }
        case "Liberal National": {
            return "#1456f1"
        }
        case "Independent": {
            return "#0b9e9e"
        }
        case "United Australia Party": {
            return "#f8ef21"
        }
        case "Katter's Australian Party": {
            return "#8a2224"
        }
        case "Centre Alliance": {
            return "#ff6300"
        }
        case "Liberal Democratic Party": {
            return "#0F3B6C"
        }
        case "Pauline Hanson's One Nation": {
            return "#F26C20"
        }
        case "Animal Justice Party": {
            return "#A5292A"
        }
        case "Victorian Socialists": {
            return "#000000"
        }
        default: {
            return "black"
        }
    }
}

export default partyColour