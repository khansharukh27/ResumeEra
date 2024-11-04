// import { templatePage } from "./action";

// import { addReferences, certificateData, coverletters } from "./action";

// import { addSoftSkills } from "./action";

const initialState = {
  personalInfo:JSON.parse(localStorage.getItem("personalInfoData")) || [],
  workExperience: JSON.parse(localStorage.getItem("workExperiences")) || [],
  education: JSON.parse(localStorage.getItem("educationData")) || [],
  keySkills: JSON.parse(localStorage.getItem("keySkills")) || [],
  templatePage:JSON.parse(localStorage.getItem("templatePage")) || [],
  addHobies:JSON.parse(localStorage.getItem("hobbiesData")) || [],
  addSoftSkills:JSON.parse(localStorage.getItem("softSkillsData")) || [],
  addLanguage:JSON.parse(localStorage.getItem("inputLanguageData")) || [],
  socialMediaLink:JSON.parse(localStorage.getItem("socialMediaLinkData")) || [],
  honorAndaward:JSON.parse(localStorage.getItem("honorAndAwardData")) || [],
  addReference:JSON.parse(localStorage.getItem("referencesData")) || [],
  coverletterss: [],
  certificateData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'personalinfo_data':
      const updatedPersonalInfo = action.payload || JSON.parse(localStorage.getItem("personalInfoData"));
      // Save to localStorage whenever there's an update
      localStorage.setItem("personalInfoData", JSON.stringify(updatedPersonalInfo));
      return {
        ...state,
        personalInfo: updatedPersonalInfo,
      };
    case 'workEx_data':
      console.log('Updating state with work experience data:', action.payload);
      return {
        ...state,
        workExperience: [ action.payload],
      };
    case 'education_data':
      console.log('Updating state with education data:', action.payload);
      return {
        ...state,
        education: [ action.payload],
      };
    case 'keyskills_data':
      console.log('Updating state with key skills data:', action.payload);
      return {
        ...state,
        keySkills: [ action.payload],
      };
    case 'template_page':
      console.log('updating state with template page:',action.payload)
      return{
        ...state,
        templatePage:[action.payload]
      } 
    case 'add_Hobbies':
      return{
        ...state,
        addHobies:[action.payload]
      }
    case 'add_soft_skills':
      return{
        ...state,
        addSoftSkills:[action.payload]
      }   
    case 'add_Language':
      return{
        ...state,
        addLanguage:[action.payload]
      }  
    case 'social_media':
      return{
        ...state,
        socialMediaLink:[action.payload]
      }
      case 'honor_and_award':
      return{
        ...state,
        honorAndaward:[action.payload]
      }
      case 'add_references':
        return{
          ...state,
          addReference:[action.payload]
        }
        case 'cover_letter':
          
        return{
          ...state,
          coverletterss:[action.payload]
        } 
        case 'certificate_Data':
          
        return{
          ...state,
          certificateData:[action.payload]
        }  
    default:
      return state;
  }
};

export default reducer;
