import React from 'react';

// --- Types ---
export type Language = 'en' | 'zh';

export interface Project {
  title: string;
  role: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  highlights?: string[];
  imageUrl?: string; // URL for image or gif
  status: 'completed' | 'in-progress' | 'coming-soon';
}

export interface Research {
  title: string;
  publication?: string;
  role: string;
  description: string;
  contributions: string[];
  link?: string;
  tags: string[];
  status?: string; // For "Seeking Collaborators" etc.
  imageUrl?: string; // URL for image or gif
}

export interface Content {
  personalInfo: {
    name: string;
    title: string;
    university: string;
    location: string;
    email: string;
    github: string;
    bio: string;
    introTag: string;
    contactBtn: string;
    githubBtn: string;
    stats: { label: string; value: string }[];
  };
  navigation: {
    about: string;
    research: string;
    projects: string;
    contact: string;
  };
  sectionTitles: {
    research: string;
    researchSubtitle: string;
    projects: string;
    projectsSubtitle: string;
    about: string;
    achievements: string;
    roles: string;
    sports: string;
    connect: string;
  };
  research: Research[];
  projects: Project[];
  extracurricular: {
    roles: string[];
    awards: string[];
  };
}

// --- Data ---

const DATA_EN: Content = {
  personalInfo: {
    name: "Yaoze Liu",
    title: "Undergraduate Researcher & Developer",
    university: "Shandong University (Taishan College)",
    location: "Shandong, China",
    email: "lyzle2024@163.com",
    github: "https://github.com/LiuYZ2024",
    introTag: "Welcome to my portfolio",
    contactBtn: "Contact Me",
    githubBtn: "GitHub",
    bio: "I am an optimistic and disciplined undergraduate student at Taishan College, Shandong University. With a solid foundation in mathematics and strong learning capabilities, I am passionate about Embodied Intelligence, 3D Vision, and Human-Robot Interaction. I thrive in collaborative environments and have a track record of successful research and engineering projects.",
    stats: [
      { label: "Focus", value: "Embodied AI" },
      { label: "Focus", value: "Motion Generation" }
    ]
  },
  navigation: {
    about: "About",
    research: "Research",
    projects: "Projects",
    contact: "Contact"
  },
  sectionTitles: {
    research: "Research Experience",
    researchSubtitle: "My academic journey exploring the intersection of Human-Computer Interaction, Computer Vision, and Robotics.",
    projects: "Selected Projects",
    projectsSubtitle: "Engineering work, open-source contributions, and practical applications.",
    about: "About Me",
    achievements: "Achievements & Interests",
    roles: "Student Work",
    sports: "Sports & Hobbies",
    connect: "Let's Connect"
  },
  research: [
    {
      title: "SymBridge: A Human-in-the-Loop Cyber-Physical Interactive System for Adaptive Human-Robot Symbiosis",
      publication: "SIGGRAPH Asia 2025 (CCF A)",
      role: "Co-Author",
      link: "https://arxiv.org/html/2502.07358v2",
      description: "Developed a system enabling real-time Human-in-the-Loop interaction between real humans and virtual robots in a physical environment using Augmented Reality (AR).",
      contributions: [
        "Processed and organized model training data.",
        "Co-authored Unity robot control programs to transmit PHC output motions to Unity.",
        "Implemented visualization analysis for model inference to aid system debugging.",
        "Integrated DeepSeek for voice-controlled interaction."
      ],
      tags: ["HRI", "AR", "Unity", "Deep Learning"],
      imageUrl: "/images/research/symbridge.png"
    },
    {
      title: "5th Jittor Artificial Intelligence Challenge - Human Skeleton Generation",
      publication: "National Finalist (Rank 5)",
      role: "Team Leader",
      link: "https://github.com/LiuYZ2024/jittor-sduers-jittor_comp_human",
      description: "Predicted spatial positions of skeleton nodes and skinning weights for 3D meshes using 3D deep neural networks to achieve high-quality, drivable 3D skeleton binding.",
      contributions: [
        "Introduced Point Cloud Transformer (PCT) segmentation capabilities to provide joint-level priors for skinning weight prediction.",
        "Designed a joint training framework with regularization losses to improve model stability and generalization.",
        "Managed the GitHub repository and project documentation."
      ],
      tags: ["Jittor", "3D Vision", "Skeleton Rigging"],
      imageUrl: "/images/research/jittor.gif"
    },
    {
      title: "Real-time Long-Sequence Human-Human Interaction Generation from Text",
      role: "Team Leader",
      description: "Working on generating real-time interactions by encoding motions into tokens using causal-TAE and employing a diffusion-based planner. Currently in research phase.",
      status: "In Progress / Seeking Collaborators",
      contributions: [
        "Conducted literature review and model design.",
        "Preprocessed the Inter-X dataset.",
        "Implemented core functional code using Transformer decoders and Diffusion model."
      ],
      tags: ["Diffusion Models", "Transformers", "Motion Generation"]
    }
  ],
  projects: [
    {
      title: "SDUerHuman Repository",
      role: "Creator",
      status: "completed",
      description: "A comprehensive repo for embodied intelligence learning. Recently integrated 'Skill' capabilities for Agents (e.g. Claude Code) to invoke scripts automatically.",
      github: "https://github.com/LiuYZ2024/SDUerHuman",
      techStack: ["PyTorch", "SMPL-X", "Wis3D", "Skill"],
      highlights: [
        "Agentic Skills Integration",
        "Visualization Tools (Wis3D)",
        "Motion Rep Conversion"
      ],
      imageUrl: "/images/projects/SDUerHuman.gif"
    },
    {
      title: "Valentine's Forest Adventure",
      role: "Solo Developer",
      status: "completed",
      description: "A 3D adventure game built in Unity. Players navigate a forest, collect energy orbs, avoid monsters, and unlock the 'Love Gate'.",
      techStack: ["Unity", "C#", "Game Design"],
      highlights: ["3D Environment Design", "Pathfinding & Logic", "Particle Effects"],
      imageUrl: "/images/projects/forest.gif"
    },


    {
      title: "Full-Stack Blog Platform",
      role: "Solo Developer",
      status: "completed",
      description: "A modern blog website with user authentication, Markdown support, and automated tech news crawling/pushing capabilities.",
      techStack: ["Vue.js", "SpringBoot", "MySQL"],
      highlights: ["Auth System", "Tech News Crawler"],
      imageUrl: "/images/projects/blog.jpg"
    },
    {
      title: "Smart Raspberry Pi Vehicle",
      role: "Maker",
      status: "completed",
      description: "Intelligent vehicle with tracking, obstacle avoidance, and gesture recognition controlled via Android app.",
      techStack: ["Raspberry Pi", "Android", "CV"],
      highlights: ["Gesture Recognition", "Hardware Control"],
      imageUrl: "/images/projects/car.gif"
    },
    {
      title: "GraphChain",
      role: "Co-developer",
      status: "coming-soon",
      description: "A knowledge graph platform connecting various domains to foster interdisciplinary learning. Features LLM-powered planning tools.",
      techStack: ["React", "Knowledge Graph", "LLM", "Web"],
      highlights: ["Domain Interconnection", "AI-Powered Learning"]
    },
    {
      title: "LUCA",
      role: "Co-developer",
      status: "coming-soon",
      description: "An Agent workflow system dedicated to realizing proactive online service agents.",
      techStack: ["LLM Agents", "Workflow Automation", "Python"],
      highlights: ["Proactive Service", "Agentic Workflow"]
    },
  ],
  extracurricular: {
    roles: [
      "Sports Committee Member, Taishan College",
      "Study Committee Member (CS Track)"
    ],
    awards: [
      "Badminton Singles Champion, College of CS",
      "5-a-side Soccer Champion, Shandong University"
    ]
  }
};

const DATA_ZH: Content = {
  personalInfo: {
    name: "刘耀泽",
    title: "本科研究员 & 开发者",
    university: "山东大学 (泰山学堂)",
    location: "中国, 山东",
    email: "lyzle2024@163.com",
    github: "https://github.com/LiuYZ2024",
    introTag: "欢迎来到我的个人主页",
    contactBtn: "联系我",
    githubBtn: "Github",
    bio: "我是一名乐观善良、自律踏实的山东大学泰山学堂本科生。我拥有扎实的数理基础和强大的学习能力，对具身智能、三维视觉和人机交互充满热情。我善于合作，并拥有丰富的科研和项目开发经历。",
    stats: [
      { label: "研究方向", value: "具身智能" },
      { label: "研究方向", value: "动作生成" }
    ]
  },
  navigation: {
    about: "关于我",
    research: "科研经历",
    projects: "项目展示",
    contact: "联系方式"
  },
  sectionTitles: {
    research: "科研经历",
    researchSubtitle: "探索人机交互、计算机视觉与机器人的交叉领域。",
    projects: "项目经历",
    projectsSubtitle: "工程实践、开源贡献与应用开发。",
    about: "关于我",
    achievements: "奖项与兴趣",
    roles: "学生工作",
    sports: "体育爱好",
    connect: "保持联系"
  },
  research: [
    {
      title: "SymBridge: 人机共生的Cyber-Physical交互系统",
      publication: "SIGGRAPH Asia 2025 (CCF A)",
      role: "共同作者",
      link: "https://arxiv.org/html/2502.07358v2",
      description: "开发了一套利用增强现实(AR)技术，在物理环境中实现真实人类与虚拟机器人实时Human-in-the-Loop交互的系统。",
      contributions: [
        "整理和预处理模型训练数据。",
        "参与编写Unity机器人控制程序，实现PHC输出动作向Unity的传输。",
        "实现模型中间推理过程可视化分析，辅助系统调试。",
        "接入DeepSeek实现交互的语音控制。"
      ],
      tags: ["人机交互", "AR", "Unity", "深度学习"],
      imageUrl: "/images/research/symbridge.png"
    },
    {
      title: "第五届“计图”人工智能挑战赛 - 人体骨骼生成",
      publication: "全国决赛第5名",
      role: "第一负责人",
      link: "https://github.com/LiuYZ2024/jittor-sduers-jittor_comp_human",
      description: "通过3D深度神经网络预测三维网格对应的骨骼位置和蒙皮权重，实现高质量、可驱动的三维骨骼绑定。",
      contributions: [
        "引入PCT分割能力，为蒙皮权重预测提供关节级先验信息。",
        "设计联合训练框架，并引入正则化损失提升模型稳定性与泛化能力。",
        "负责Github仓库建设与文档编写。"
      ],
      tags: ["Jittor", "三维视觉", "骨骼绑定"],
      imageUrl: "/images/research/jittor.gif"
    },
    {
      title: "文本条件下的长序列人际交互动作实时生成",
      role: "第一负责人",
      description: "致力于通过Causal-TAE编码动作Token，并利用Diffusion Planner作为Reactor控制器，实现实时交互生成。目前处于研究阶段。",
      status: "进行中 / 期待合作者",
      contributions: [
        "负责文献调研与模型整体设计。",
        "Inter-X数据集预处理。",
        "实现基于Transformer Decoder和Diffusion模型的核心指导生成代码。"
      ],
      tags: ["扩散模型", "Transformer", "动作生成"]
    }
  ],
  projects: [
    {
      title: "SDUerHuman 开源仓库",
      role: "创建者",
      status: "completed",
      description: "具身智能学习全流程记录仓库。新增Agent Skill功能，支持Claude Code等Agent直接调用脚本。",
      github: "https://github.com/LiuYZ2024/SDUerHuman",
      techStack: ["PyTorch", "SMPL-X", "Wis3D", "Skill"],
      highlights: [
        "Agent Skill集成",
        "Wis3D可视化脚本",
        "动作格式转换工具"
      ],
      imageUrl: "/images/projects/SDUerHuman.gif"
    },
    {
      title: "情人节森林大冒险",
      role: "独立开发",
      status: "completed",
      description: "基于Unity开发的3D冒险游戏。玩家在森林中沿指定路线收集能量球，躲避小怪兽，最终打开恋爱大门。",
      techStack: ["Unity", "C#", "游戏设计"],
      highlights: ["3D场景搭建", "寻路算法", "粒子特效"],
      imageUrl: "/images/projects/forest.gif"
    },
    {
      title: "全栈博客平台",
      role: "独立开发",
      status: "completed",
      description: "基于Vue和SpringBoot的前后端分离博客。支持Markdown上传、用户登录以及科技热点自动爬取推送。",
      techStack: ["Vue.js", "SpringBoot", "MySQL"],
      highlights: ["用户鉴权系统", "爬虫与推送"],
      imageUrl: "/images/projects/blog.jpg"
    },
    {
      title: "智能树莓派小车",
      role: "Maker",
      status: "completed",
      description: "具备循迹、避障、手势识别功能的智能小车，配套Android控制APP。",
      techStack: ["树莓派", "Android", "CV"],
      highlights: ["手势识别算法", "移动端控制"],
      imageUrl: "/images/projects/car.gif"
    },
    {
      title: "GraphChain",
      role: "共同开发者",
      status: "coming-soon",
      description: "利用图结构串联各领域的知识平台。结合LLM能力，为用户提供深度学习路径和规划工具，促进跨领域交流。",
      techStack: ["React", "知识图谱", "LLM", "Web"],
      highlights: ["跨领域互通", "AI辅助学习"]
    },
    {
      title: "LUCA",
      role: "共同开发者",
      status: "coming-soon",
      description: "一个致力于实现在线主动服务的Agent工作流系统。",
      techStack: ["LLM Agents", "Workflow Automation", "Python"],
      highlights: ["主动服务", "Agent工作流"]
    },
  ],
  extracurricular: {
    roles: [
      "泰山学堂体育委员",
      "计算机方向学习委员"
    ],
    awards: [
      "计算机学院羽毛球单打冠军",
      "山东大学五人制足球冠军 (主力)"
    ]
  }
};

export const getContent = (lang: Language): Content => {
  return lang === 'zh' ? DATA_ZH : DATA_EN;
};
