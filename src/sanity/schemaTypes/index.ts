// Project/Quest Schema
export const projectType = {
  name: 'project',
  title: 'Quest (Project)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'objective', title: 'Objective', type: 'text' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'techStack', title: 'Tech Stack', type: 'array', of: [{type: 'string'}] },
    { name: 'fullDescription', title: 'Full Description', type: 'text' },
    { name: 'link', title: 'External Link', type: 'url' },
    { name: 'github', title: 'Github Link', type: 'url' },
  ],
};

// Skill/Stat Schema
export const skillType = {
  name: 'skill',
  title: 'Stat (Skill)',
  type: 'document',
  fields: [
    { name: 'name', title: 'Skill Name', type: 'string' },
    { name: 'level', title: 'Level (1-100)', type: 'number', validation: (Rule: any) => Rule.min(1).max(100) },
    { name: 'category', title: 'Category', type: 'string' },
  ],
};

// Dialogue Schema
export const dialogueType = {
  name: 'dialogue',
  title: 'AI Guide Dialogue',
  type: 'document',
  fields: [
    { name: 'triggerSection', title: 'Trigger Section', type: 'string' },
    { name: 'message', title: 'Message', type: 'string' },
  ],
};

export const schemaTypes = [projectType, skillType, dialogueType];
