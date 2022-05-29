
function tax (n) {

    if(n<=2,25,000)
    {
        return "no tax"
    }
    else if(n>2,25,000 && n<=5,00,000)
    {
        var tax = n-((n*10)/100)
        {
            return tax
        }
    }

    else if(n>5,00,000 && n<=10,00,000)
    {
        
            var tax = n-((n*30)/100)
            {
                return tax
            }
        
    }

    else if(n>10,00,000)
    {
        
            var tax = n-((n*10)/100)
            {
                return tax
            }
        
    }
    else
    {
            return "enter number"
    }

}


module.export = tax