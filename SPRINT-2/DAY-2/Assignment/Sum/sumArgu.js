function sum()
{
    // console.log(arguments);
    var sum = 0
    for(var i=0; i<arguments.length; i++)
    {
        if(typeof(arguments[i])==="number")
        {
            {
                sum = sum+arguments[i]
            }

        }
        if(typeof(arguments[i])==="string")
        {
            {
               return false
            }

        }
        
        if(typeof(arguments[i])===null)
        {
            {
               return false
            }
        }
        if(typeof(arguments[i])==="boolean")
        {
            {
               return false
            }
        }
    }
    return sum
}
module.exports = sum;