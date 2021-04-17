
let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents:[],
        timeOutEvents: [],
    }
}

// }
// function createEmployeeRecords(updateRow){
//    return updateRow.map(data =>{
//         return createEmployeeRecord(data)
//     })
    
// }

// let createTimeInEvent = function(employee, dateStamp){
//     let [date, hour] = dateStamp.split(' ')
//     employee.timeInEvents.push({
//         type: "TimeIn",
//         hour: parseInt(hour, 10),
//         date,
//     })
//     return employee
// }