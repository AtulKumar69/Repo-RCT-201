function time(n)
{
    var hr = Math.floor(n/3600000)
    var hrS = n%3600000

    var min = Math.floor(hrS/60000)
    var minS = n%60000

    var sec = Math.floor(minS/1000)

    if(hr==0 || hr==1)
    {
        var Hour = "hour"
    }
    else
    {
        var Hour = "hours"
    }

    if(min==0 || min==1)
    {
        var Minute = "minute"
    }
    else
    {
        var Minute = "minutes"
    }
    if(sec==0 || sec==1)
    {
        var Second = "second"
    }
    else
    {
        var Second = "seconds"
    }
   
    
    var ans = hr+" "+Hour+" "+min+" "+Minute+" "+sec+" "+Second
    
    return ans
}

module.exports = time
