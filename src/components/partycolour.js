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
            return "#828282"
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
        case "Australian Values Party": {
            return "#BDAE78"
        }
        case "Derryn Hinch's Justice Party": {
            return "#012F5D"
        }
        case "Australian Federation Party": {
            return "#538A2E"
        }
        case "Australian Citizens Party": {
            return "#656600"
        }
        case "The Great Australian Party": {
            return "#142860"
        }
        case "TNL": {
            return "#53C2BD"
        }
        default: {
            return "black"
        }
    }
}

export default partyColour