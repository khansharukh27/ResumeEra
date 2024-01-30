// import { templatePage } from "./action";

const initialState = {
  personalInfo: [],
  workExperience: [],
  education: [],
  keySkills: [],
  templatePage:[],
  addHobies:[],
  addLanguage:[],
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
    case 'add_Language':
      return{
        ...state,
        addLanguage:[action.payload]
      }  
    default:
      return state;
  }
};

export default reducer;
