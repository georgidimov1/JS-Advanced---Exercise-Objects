function bmi(name,age,...params) {
    let index = params.map(x => Math.round(x)).reduce((previus,current,index) =>Math.round((previus/(Math.pow(current,index+1)))*10000));
    let personalInfo = {
        "age": age,
        "weight": params[0],
        "height": params[1]
    }
    let Output = {
        "name" : name,
        "personalInfo" : personalInfo,
        "BMI" : index,
        "status" : inX(index)
    }
    if (inX(index)=="obese"){Output["recommendation"]="admission required"};
    function inX(index) {
        let objectMap = {
            "18.5": "underweight",
            "25": "normal",
            "30": "overweight",
            "30.5": "obese"
        }
        let lastItem= Object.keys(objectMap).filter((x => +x > index)).sort((a,b)=> a-b).shift()
        if(!lastItem){lastItem="30.5"}
      
    return (objectMap[lastItem])
    }
    return(Output)
    }