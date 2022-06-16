#query to get all issues

query {
    repository(owner:"rropen", name:"MEC") {
        issues {
            totalCount
        }
        open: issues(states:OPEN) {
            totalCount
        }
        closed: issues(states:CLOSED){
            totalCount
        }
    }
}