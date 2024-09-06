




export const personalInfoData = (input) =>{
    console.log("formData in action:-",input)
    
    return{
        type:'personalinfo_data',
        payload:input
    }
}

export const workExData = (input) =>{
    return{
        type:'workEx_data',
        payload:input
    }
}

export const educationData = (input) =>{
    return{
        type:"education_data",
        payload:input
    }
}

export const keyskillsData = (input) =>{
    return{
        type:'keyskills_data',
        payload:input
    }
}

export const templatePage = (input) =>{
    return {
        type:'template_page',
        payload:input
    }
}

export const addHobbies = (input) =>{
    return{
        type:'add_Hobbies',
        payload:input
    }
}

export const addLanguage = (input) =>{
    return{
        type:'add_Language',
        payload:input
    }
}

export const socialMediaLink = (input) =>{
    return{
        type:'social_media',
        payload:input
    }
}

export const addSoftSkills = (input) =>{
    return{
        type:'add_soft_skills',
        payload:input
    }
}
export const honorAndAwardData = (honorsAndAwards)  => {
    return{
        type:'honor_and_award',
        payload:honorsAndAwards
    }
}
export const addReferences = (data)  => {
    return{
        type:'add_references',
        payload:data
    }
}
