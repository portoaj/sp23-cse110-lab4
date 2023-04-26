for (const statistic in statistics) {
    if(statistic[0] === 'r' || statistics[statistic] % 2 === 1)
        console.log(statistics[statistic])
}