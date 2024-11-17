import { useSelector } from "react-redux";

const Preview102 = () => {
  const personalInfo = useSelector((state) => state.reducer.personalInfo);
  const education = useSelector((state) => [state.reducer.education]);
  const keyskills = useSelector((state) => [state.reducer.keySkills]);
  const work = useSelector((state) => [state.reducer.workExperience]);
  const Honor = useSelector((state) => [state.reducer.honorAndaward]);
  const Refrence = useSelector((state) => [state.reducer.addReference])
  const SoftSkill = useSelector((state) => [state.reducer.addSoftSkills])

  return (
    <div className="resume">
      
    </div>

  )
}
export default Preview102;