interface imgURLType {
  asset: string;
  _type: string;
}

export default interface ProjectType {
  codeLink: string;
  description: string;
  imgUrl: imgURLType;
  projectLink: string;
  tags: string[];
  title: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export default interface SkillsType {
  name: string;
  icon: imgURLType;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
