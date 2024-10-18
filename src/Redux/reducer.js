// import { templatePage } from "./action";

import { addReferences, certificateData, coverletters } from "./action";

// import { addSoftSkills } from "./action";

const initialState = {
  personalInfo: [],
  workExperience: [],
  education: [],
  keySkills: [],
  templatePage:[],
  addHobies:[],
  addSoftSkills:[],
  addLanguage:[],
  socialMediaLink:[],
  honorAndaward:[],
  addReference:[],
  coverletterss:[],
  certificateData:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'personalinfo_data':
      console.log('Updating state with personal info data:', action.payload);
      return {
        ...state,
        personalInfo: [ action.payload],
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
