export const personalInfoData = (input) => {
    localStorage.setItem('personalInfoData', JSON.stringify(input));
    return {
        type: 'personalinfo_data',
        payload: input,
    };
};

export const workExData = (input) => {
    localStorage.setItem('workExData', JSON.stringify(input));
    return {
        type: 'workEx_data',
        payload: input,
    };
};

export const educationData = (input) => {
    localStorage.setItem('educationData', JSON.stringify(input));
    return {
        type: 'education_data',
        payload: input,
    };
};

export const keyskillsData = (input) => {
    localStorage.setItem('keyskillsData', JSON.stringify(input));
    return {
        type: 'keyskills_data',
        payload: input,
    };
};

export const templatePage = (input) => {
    localStorage.setItem('templatePage', JSON.stringify(input));
    return {
        type: 'template_page',
        payload: input,
    };
};

export const addHobbies = (input) => {
    localStorage.setItem('hobbiesData', JSON.stringify(input));
    return {
        type: 'add_Hobbies',
        payload: input,
    };
};

export const addLanguage = (input) => {
    localStorage.setItem('languageData', JSON.stringify(input));
    return {
        type: 'add_Language',
        payload: input,
    };
};

export const socialMediaLink = (input) => {
    localStorage.setItem('socialMediaLinkData', JSON.stringify(input));
    return {
        type: 'social_media',
        payload: input,
    };
};

export const addSoftSkills = (input) => {
    localStorage.setItem('softSkillsData', JSON.stringify(input));
    return {
        type: 'add_soft_skills',
        payload: input,
    };
};

export const honorAndAwardData = (honorsAndAwards) => {
    localStorage.setItem('honorAndAwardData', JSON.stringify(honorsAndAwards));
    return {
        type: 'honor_and_award',
        payload: honorsAndAwards,
    };
};

export const addReferences = (data) => {
    localStorage.setItem('referencesData', JSON.stringify(data));
    return {
        type: 'add_references',
        payload: data,
    };
};

export const coverletters = (data) => {
    localStorage.setItem('coverLetterData', JSON.stringify(data));
    return {
        type: 'cover_letter',
        payload: data,
    };
};

export const certificateData = (data) => {
    localStorage.setItem('certificateData', JSON.stringify(data));
    return {
        type: 'certificate_Data',
        payload: data,
    };
};
