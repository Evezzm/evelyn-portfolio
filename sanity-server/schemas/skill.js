export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of skill",
      type: "string",
    },
    {
      name: "skillName",
      title: "SkillName",
      type: "string",
      description: "Name of skill",
      // validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "skillNameExtended",
      title: "SkillNameExtended",
      type: "string",
      description: "Extended Name of skill",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
