import PptxGenJS from 'pptxgenjs';

// Create presentation
const pptx = new PptxGenJS();

// Define colors (QFabrics design system)
const colors = {
  background: '000000',
  backgroundElevated: '0a0a0a',
  foreground: 'fafafa',
  foregroundMuted: 'a1a1aa',
  foregroundSubtle: '9ca3af',
  border: '2a2a2a',
  green: '00ff88',
  orange: 'ff8800',
  red: 'ff4444',
  blue: '3b82f6',
  purple: 'a855f7',
};

// Set presentation defaults
pptx.layout = 'LAYOUT_16x9';
pptx.author = 'LIRA Architecture';
pptx.title = 'LIRA - Leadership Intelligence & Recruitment Assistant';
pptx.subject = 'Architecture Diagram';

// Define master slide
pptx.defineSlideMaster({
  title: 'LIRA_MASTER',
  background: { color: colors.background },
});

// Helper function to add slide with title
function addSlide(title, subtitle = '') {
  const slide = pptx.addSlide({ masterName: 'LIRA_MASTER' });

  // Title
  slide.addText(title, {
    x: 0.5,
    y: 0.3,
    w: '90%',
    h: 0.6,
    fontSize: 32,
    fontFace: 'Arial',
    color: colors.foreground,
    bold: true,
  });

  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.5,
      y: 0.9,
      w: '90%',
      h: 0.4,
      fontSize: 16,
      fontFace: 'Arial',
      color: colors.foregroundMuted,
    });
  }

  return slide;
}

// ============================================
// SLIDE 1: Title Slide
// ============================================
const slide1 = pptx.addSlide({ masterName: 'LIRA_MASTER' });

slide1.addText('LIRA', {
  x: 0,
  y: 2,
  w: '100%',
  h: 1.2,
  fontSize: 72,
  fontFace: 'Arial',
  color: colors.foreground,
  bold: true,
  align: 'center',
});

slide1.addText([
  { text: 'L', options: { color: colors.green, bold: true } },
  { text: 'eadership ', options: { color: colors.foregroundMuted } },
  { text: 'I', options: { color: colors.green, bold: true } },
  { text: 'ntelligence & ', options: { color: colors.foregroundMuted } },
  { text: 'R', options: { color: colors.green, bold: true } },
  { text: 'ecruitment ', options: { color: colors.foregroundMuted } },
  { text: 'A', options: { color: colors.green, bold: true } },
  { text: 'ssistant', options: { color: colors.foregroundMuted } },
], {
  x: 0,
  y: 3.2,
  w: '100%',
  h: 0.5,
  fontSize: 24,
  fontFace: 'Arial',
  align: 'center',
});

slide1.addText('An AI-powered executive recruiting agent built on DeepAgents framework with LangChain', {
  x: 0,
  y: 4,
  w: '100%',
  h: 0.4,
  fontSize: 16,
  fontFace: 'Arial',
  color: colors.foregroundSubtle,
  align: 'center',
});

// ============================================
// SLIDE 2: Overview / Key Stats
// ============================================
const slide2 = addSlide('Architecture Overview', 'Key metrics at a glance');

const stats = [
  { value: '12', label: 'Tools Available', sublabel: '7 file + 4 external + 1 subagent', color: colors.green },
  { value: '1,286', label: 'System Prompt Lines', sublabel: 'Detailed instructions', color: colors.orange },
  { value: '15', label: 'Leadership Traits', sublabel: 'Across 4 quotients', color: colors.blue },
  { value: '3', label: 'Storage Tiers', sublabel: 'SQL + Blob + NFS', color: colors.purple },
];

stats.forEach((stat, i) => {
  const x = 0.5 + (i * 2.4);

  // Box
  slide2.addShape(pptx.ShapeType.roundRect, {
    x: x,
    y: 1.8,
    w: 2.2,
    h: 2,
    fill: { color: colors.backgroundElevated },
    line: { color: colors.border, width: 1 },
  });

  // Value
  slide2.addText(stat.value, {
    x: x,
    y: 2,
    w: 2.2,
    h: 0.7,
    fontSize: 36,
    fontFace: 'Arial',
    color: stat.color,
    bold: true,
    align: 'center',
  });

  // Label
  slide2.addText(stat.label, {
    x: x,
    y: 2.7,
    w: 2.2,
    h: 0.4,
    fontSize: 14,
    fontFace: 'Arial',
    color: colors.foreground,
    align: 'center',
  });

  // Sublabel
  slide2.addText(stat.sublabel, {
    x: x,
    y: 3.1,
    w: 2.2,
    h: 0.3,
    fontSize: 10,
    fontFace: 'Arial',
    color: colors.foregroundSubtle,
    align: 'center',
  });
});

// Architecture layers
slide2.addText('Architecture Layers', {
  x: 0.5,
  y: 4.2,
  w: 9,
  h: 0.4,
  fontSize: 16,
  fontFace: 'Arial',
  color: colors.foreground,
  bold: true,
});

const layers = [
  { name: 'Frontend Interfaces', desc: 'Email + Web UI', color: colors.orange },
  { name: 'LIRA AI Agent', desc: 'DeepAgents + Claude Opus 4.5', color: colors.green },
  { name: 'Backend Storage', desc: 'SQL + Blob + NFS', color: colors.blue },
  { name: 'Outputs', desc: 'Evaluation Deliverables', color: colors.purple },
];

layers.forEach((layer, i) => {
  slide2.addShape(pptx.ShapeType.rect, {
    x: 0.5 + (i * 2.4),
    y: 4.6,
    w: 2.2,
    h: 0.6,
    fill: { color: colors.backgroundElevated },
    line: { color: layer.color, width: 2 },
  });

  slide2.addText(layer.name, {
    x: 0.5 + (i * 2.4),
    y: 4.65,
    w: 2.2,
    h: 0.35,
    fontSize: 11,
    fontFace: 'Arial',
    color: colors.foreground,
    align: 'center',
    bold: true,
  });

  slide2.addText(layer.desc, {
    x: 0.5 + (i * 2.4),
    y: 4.95,
    w: 2.2,
    h: 0.25,
    fontSize: 9,
    fontFace: 'Arial',
    color: colors.foregroundMuted,
    align: 'center',
  });
});

// ============================================
// SLIDE 3: Frontend Interfaces
// ============================================
const slide3 = addSlide('Frontend Interfaces', 'Two primary entry points for user interaction');

// Email Interface
slide3.addShape(pptx.ShapeType.roundRect, {
  x: 0.5,
  y: 1.5,
  w: 4.3,
  h: 3.5,
  fill: { color: colors.backgroundElevated },
  line: { color: colors.orange, width: 2 },
});

slide3.addText('📧  Email', {
  x: 0.7,
  y: 1.7,
  w: 4,
  h: 0.4,
  fontSize: 20,
  fontFace: 'Arial',
  color: colors.foreground,
  bold: true,
});

slide3.addText([
  { text: '• Microsoft Graph Webhook\n', options: { bullet: false } },
  { text: '• Real-time notifications\n', options: { bullet: false } },
  { text: '• Azure Functions backend\n', options: { bullet: false } },
], {
  x: 0.7,
  y: 2.2,
  w: 4,
  h: 1,
  fontSize: 14,
  fontFace: 'Arial',
  color: colors.foregroundMuted,
});

slide3.addText('Features:', {
  x: 0.7,
  y: 3.2,
  w: 4,
  h: 0.3,
  fontSize: 12,
  fontFace: 'Arial',
  color: colors.foregroundSubtle,
  bold: true,
});

slide3.addText('Email-to-chat routing • Auto-reply generation\nAttachment extraction • Thread continuity', {
  x: 0.7,
  y: 3.5,
  w: 4,
  h: 0.8,
  fontSize: 11,
  fontFace: 'Arial',
  color: colors.foregroundMuted,
});

// Web UI Interface
slide3.addShape(pptx.ShapeType.roundRect, {
  x: 5.2,
  y: 1.5,
  w: 4.3,
  h: 3.5,
  fill: { color: colors.backgroundElevated },
  line: { color: colors.green, width: 2 },
});

slide3.addText('💬  Web UI (Chat)', {
  x: 5.4,
  y: 1.7,
  w: 4,
  h: 0.4,
  fontSize: 20,
  fontFace: 'Arial',
  color: colors.foreground,
  bold: true,
});

slide3.addText([
  { text: '• Next.js 15 App Router\n', options: { bullet: false } },
  { text: '• Real-time streaming (WIP)\n', options: { bullet: false } },
  { text: '• File upload support\n', options: { bullet: false } },
], {
  x: 5.4,
  y: 2.2,
  w: 4,
  h: 1,
  fontSize: 14,
  fontFace: 'Arial',
  color: colors.foregroundMuted,
});

slide3.addText('Data Access:', {
  x: 5.4,
  y: 3.2,
  w: 4,
  h: 0.3,
  fontSize: 12,
  fontFace: 'Arial',
  color: colors.foregroundSubtle,
  bold: true,
});

slide3.addText('/candidates/ browser • /positions/ browser\n/templates/ viewer • Document previews', {
  x: 5.4,
  y: 3.5,
  w: 4,
  h: 0.8,
  fontSize: 11,
  fontFace: 'Arial',
  color: colors.foregroundMuted,
});

// ============================================
// SLIDE 4: LIRA AI Agent Core
// ============================================
const slide4 = addSlide('LIRA AI Agent Core', 'DeepAgents Framework + LangChain powered by Claude Opus 4.5');

// Central model box
slide4.addShape(pptx.ShapeType.roundRect, {
  x: 2.5,
  y: 1.5,
  w: 5,
  h: 1.2,
  fill: { color: '001a0d' },
  line: { color: colors.green, width: 2 },
});

slide4.addText('Claude Opus 4.5 (Anthropic)', {
  x: 2.5,
  y: 1.6,
  w: 5,
  h: 0.5,
  fontSize: 20,
  fontFace: 'Arial',
  color: colors.green,
  bold: true,
  align: 'center',
});

slide4.addText('Primary reasoning & tool execution', {
  x: 2.5,
  y: 2.1,
  w: 5,
  h: 0.4,
  fontSize: 12,
  fontFace: 'Arial',
  color: colors.foregroundMuted,
  align: 'center',
});

// Tool categories
const toolCategories = [
  {
    title: '7 File Operations',
    subtitle: 'from DeepAgents',
    tools: ['ls', 'read_file', 'write_file', 'edit_file', 'glob', 'grep', 'write_todos'],
    color: colors.green,
    x: 0.3
  },
  {
    title: '4 External Tools',
    subtitle: 'custom integrations',
    tools: ['web_search', 'send_email', 'search_contacts', 'copy_file'],
    color: colors.orange,
    x: 3.4
  },
  {
    title: '1 Subagent',
    subtitle: 'complex tasks',
    tools: ['task'],
    color: colors.purple,
    x: 6.5
  },
];

toolCategories.forEach((cat) => {
  slide4.addShape(pptx.ShapeType.roundRect, {
    x: cat.x,
    y: 3,
    w: 3,
    h: 2.2,
    fill: { color: colors.backgroundElevated },
    line: { color: cat.color, width: 1 },
  });

  slide4.addText(cat.title, {
    x: cat.x,
    y: 3.1,
    w: 3,
    h: 0.35,
    fontSize: 14,
    fontFace: 'Arial',
    color: colors.foreground,
    bold: true,
    align: 'center',
  });

  slide4.addText(cat.subtitle, {
    x: cat.x,
    y: 3.4,
    w: 3,
    h: 0.25,
    fontSize: 10,
    fontFace: 'Arial',
    color: colors.foregroundSubtle,
    align: 'center',
  });

  slide4.addText(cat.tools.join('  •  '), {
    x: cat.x + 0.1,
    y: 3.8,
    w: 2.8,
    h: 1.2,
    fontSize: 10,
    fontFace: 'Courier New',
    color: cat.color,
    align: 'center',
    valign: 'top',
  });
});

// ============================================
// SLIDE 5: Tools Detail
// ============================================
const slide5 = addSlide('12 Tools Available', 'Complete tool inventory for the LIRA agent');

const allTools = [
  { name: 'ls', desc: 'List directory contents', cat: 'File' },
  { name: 'read_file', desc: 'Read file with line numbers (offset/limit)', cat: 'File' },
  { name: 'write_file', desc: 'Create new file (fails if exists)', cat: 'File' },
  { name: 'edit_file', desc: 'Modify existing file via string replacement', cat: 'File' },
  { name: 'glob', desc: 'Find files by pattern (e.g., **/*.md)', cat: 'File' },
  { name: 'grep', desc: 'Search file contents with regex', cat: 'File' },
  { name: 'write_todos', desc: 'Track tasks and multi-step operations', cat: 'File' },
  { name: 'web_search', desc: 'Search web via Tavily API', cat: 'External' },
  { name: 'send_email', desc: 'Send email from LIRA mailbox', cat: 'External' },
  { name: 'search_contacts', desc: 'Search M365 directory', cat: 'External' },
  { name: 'copy_file', desc: 'Copy .md files directly to NFS (0 tokens)', cat: 'External' },
  { name: 'task', desc: 'Spawn subagent for complex multi-candidate tasks', cat: 'Subagent' },
];

// Table header
slide5.addShape(pptx.ShapeType.rect, {
  x: 0.5,
  y: 1.4,
  w: 9,
  h: 0.4,
  fill: { color: colors.backgroundElevated },
});

slide5.addText('Tool', { x: 0.6, y: 1.45, w: 2, h: 0.3, fontSize: 12, fontFace: 'Arial', color: colors.foreground, bold: true });
slide5.addText('Description', { x: 2.6, y: 1.45, w: 5.5, h: 0.3, fontSize: 12, fontFace: 'Arial', color: colors.foreground, bold: true });
slide5.addText('Category', { x: 8.1, y: 1.45, w: 1.3, h: 0.3, fontSize: 12, fontFace: 'Arial', color: colors.foreground, bold: true });

// Table rows
allTools.forEach((tool, i) => {
  const y = 1.85 + (i * 0.35);
  const catColor = tool.cat === 'File' ? colors.green : tool.cat === 'External' ? colors.orange : colors.purple;

  if (i % 2 === 0) {
    slide5.addShape(pptx.ShapeType.rect, {
      x: 0.5,
      y: y - 0.05,
      w: 9,
      h: 0.35,
      fill: { color: '0f0f0f' },
      line: { color: '0f0f0f' },
    });
  }

  slide5.addText(tool.name, { x: 0.6, y: y, w: 2, h: 0.3, fontSize: 11, fontFace: 'Courier New', color: catColor });
  slide5.addText(tool.desc, { x: 2.6, y: y, w: 5.5, h: 0.3, fontSize: 11, fontFace: 'Arial', color: colors.foregroundMuted });
  slide5.addText(tool.cat, { x: 8.1, y: y, w: 1.3, h: 0.3, fontSize: 10, fontFace: 'Arial', color: catColor });
});

// ============================================
// SLIDE 6: System Prompt
// ============================================
const slide6 = addSlide('System Prompt', '1,286 lines of comprehensive instructions in lira-base-prompt.md');

// Left column - Prompt Contents
slide6.addShape(pptx.ShapeType.roundRect, {
  x: 0.5,
  y: 1.5,
  w: 4.3,
  h: 3.5,
  fill: { color: colors.backgroundElevated },
  line: { color: colors.border, width: 1 },
});

slide6.addText('Prompt Contents', {
  x: 0.7,
  y: 1.6,
  w: 4,
  h: 0.4,
  fontSize: 16,
  fontFace: 'Arial',
  color: colors.foreground,
  bold: true,
});

const promptContents = [
  'Role: Executive recruiting AI',
  'File system architecture',
  'Tool usage guidelines',
  'Candidate workflow',
  'Position workflow',
  'Screening methodology',
  'Scorecard evaluation framework',
  'Leadership traits assessment',
  'Interview preparation guidelines',
];

slide6.addText(promptContents.map(p => '├── ' + p).join('\n'), {
  x: 0.7,
  y: 2.1,
  w: 4,
  h: 2.8,
  fontSize: 11,
  fontFace: 'Arial',
  color: colors.foregroundMuted,
});

// Right column - Templates
slide6.addShape(pptx.ShapeType.roundRect, {
  x: 5.2,
  y: 1.5,
  w: 4.3,
  h: 2.2,
  fill: { color: colors.backgroundElevated },
  line: { color: colors.orange, width: 1 },
});

slide6.addText('Templates (NFS /templates/)', {
  x: 5.4,
  y: 1.6,
  w: 4,
  h: 0.4,
  fontSize: 16,
  fontFace: 'Arial',
  color: colors.foreground,
  bold: true,
});

const templates = [
  'candidate_dossier_template.md',
  'candidates_metadata.md',
  'positions_metadata.md',
  'scorecard_evaluation_guide.md',
  'interview_pack_template.md',
];

slide6.addText(templates.map(t => '├── ' + t).join('\n'), {
  x: 5.4,
  y: 2.1,
  w: 4,
  h: 1.5,
  fontSize: 10,
  fontFace: 'Courier New',
  color: colors.orange,
});

// Context injection
slide6.addShape(pptx.ShapeType.roundRect, {
  x: 5.2,
  y: 3.8,
  w: 4.3,
  h: 1.2,
  fill: { color: colors.backgroundElevated },
  line: { color: colors.border, width: 1 },
});

slide6.addText('Context Injection', {
  x: 5.4,
  y: 3.9,
  w: 4,
  h: 0.35,
  fontSize: 14,
  fontFace: 'Arial',
  color: colors.foreground,
  bold: true,
});

slide6.addText('userId • userEmail • chatId\ncandidateId • positionId • emailMetadata', {
  x: 5.4,
  y: 4.3,
  w: 4,
  h: 0.6,
  fontSize: 11,
  fontFace: 'Courier New',
  color: colors.foregroundMuted,
});

// ============================================
// SLIDE 7: Backend Storage
// ============================================
const slide7 = addSlide('Backend Storage', '3-tier storage architecture for different data types');

const storages = [
  {
    title: 'SQL Database',
    subtitle: 'PostgreSQL',
    items: ['User (accounts)', 'Chat (sessions)', 'Message_v2', 'Document', 'Vote_v2', 'EmailThread'],
    perf: 'Indexed queries • Transactions • Drizzle ORM',
    color: colors.blue,
    x: 0.3,
  },
  {
    title: 'Azure Blob Storage',
    subtitle: '/uploads/',
    items: ['PDFs, DOCx, PPTx', 'Images, XLSx', 'Shareable URLs'],
    perf: 'Read: 150-200ms • Write: 200-300ms',
    color: colors.orange,
    x: 2.6,
  },
  {
    title: 'Azure Files NFS',
    subtitle: 'VNet secured',
    items: ['/candidates/', '/positions/', '/templates/'],
    perf: '10-50x faster: 5-50ms',
    color: colors.green,
    x: 4.9,
  },
  {
    title: 'StateBackend',
    subtitle: 'In-Memory',
    items: ['/scratch.md', '/notes.txt', '/workspace/*'],
    perf: 'Ephemeral • Lost on turn end',
    color: colors.foregroundSubtle,
    x: 7.2,
  },
];

storages.forEach((storage) => {
  slide7.addShape(pptx.ShapeType.roundRect, {
    x: storage.x,
    y: 1.5,
    w: 2.2,
    h: 3.2,
    fill: { color: colors.backgroundElevated },
    line: { color: storage.color, width: 2 },
  });

  slide7.addText(storage.title, {
    x: storage.x,
    y: 1.6,
    w: 2.2,
    h: 0.4,
    fontSize: 13,
    fontFace: 'Arial',
    color: colors.foreground,
    bold: true,
    align: 'center',
  });

  slide7.addText(storage.subtitle, {
    x: storage.x,
    y: 1.95,
    w: 2.2,
    h: 0.3,
    fontSize: 10,
    fontFace: 'Arial',
    color: storage.color,
    align: 'center',
  });

  slide7.addText(storage.items.map(i => '• ' + i).join('\n'), {
    x: storage.x + 0.1,
    y: 2.4,
    w: 2,
    h: 1.4,
    fontSize: 9,
    fontFace: 'Arial',
    color: colors.foregroundMuted,
  });

  slide7.addText(storage.perf, {
    x: storage.x + 0.1,
    y: 3.9,
    w: 2,
    h: 0.6,
    fontSize: 8,
    fontFace: 'Arial',
    color: colors.foregroundSubtle,
  });
});

// Doc extraction note
slide7.addShape(pptx.ShapeType.roundRect, {
  x: 2.6,
  y: 4.8,
  w: 4.8,
  h: 0.5,
  fill: { color: '1a0d00' },
  line: { color: colors.orange, width: 1 },
});

slide7.addText('Document Extraction: Azure Content Understanding + Gemini (visual enrichment)', {
  x: 2.6,
  y: 4.85,
  w: 4.8,
  h: 0.4,
  fontSize: 11,
  fontFace: 'Arial',
  color: colors.orange,
  align: 'center',
});

// ============================================
// SLIDE 8: LIRA Outputs
// ============================================
const slide8 = addSlide('LIRA Outputs', 'Four evaluation deliverables');

const outputs = [
  {
    num: '1',
    title: 'Screening Fit',
    subtitle: 'Requirements Match',
    items: ['Experience requirements', 'Industry/Domain expertise', 'Functional skills', 'Education/Credentials'],
    output: 'STRONG • MEDIUM • LOW',
    color: colors.blue,
    x: 0.3,
  },
  {
    num: '2',
    title: 'Scorecard Evaluation',
    subtitle: 'Goal-by-Goal Analysis',
    items: ['Revenue/Financial metrics', 'Pipeline & Efficiency', 'Team & Organization', 'Strategic & Operational'],
    output: 'HIGH • MEDIUM • LOW',
    color: colors.green,
    x: 2.55,
  },
  {
    num: '3',
    title: 'Leadership Traits',
    subtitle: '15 Traits Assessment',
    items: ['COGNITIVE (4 traits)', 'EMOTIONAL (4 traits)', 'DRIVE (4 traits)', 'AGILITY (3 traits)'],
    output: 'Conviction + Evidence',
    color: colors.purple,
    x: 4.8,
  },
  {
    num: '4',
    title: 'Interview Questions',
    subtitle: 'Targeted Gap Closure',
    items: ['Scorecard Gap Questions', 'Leadership Trait Questions', 'Calibration Questions', 'Behavioral STAR format'],
    output: 'Prioritized Questions',
    color: colors.orange,
    x: 7.05,
  },
];

outputs.forEach((out) => {
  slide8.addShape(pptx.ShapeType.roundRect, {
    x: out.x,
    y: 1.5,
    w: 2.15,
    h: 3.3,
    fill: { color: colors.backgroundElevated },
    line: { color: out.color, width: 2 },
  });

  // Number badge
  slide8.addShape(pptx.ShapeType.ellipse, {
    x: out.x + 0.7,
    y: 1.6,
    w: 0.6,
    h: 0.6,
    fill: { color: out.color + '20' },
    line: { color: out.color, width: 1 },
  });

  slide8.addText(out.num, {
    x: out.x + 0.7,
    y: 1.65,
    w: 0.6,
    h: 0.5,
    fontSize: 18,
    fontFace: 'Arial',
    color: out.color,
    bold: true,
    align: 'center',
  });

  slide8.addText(out.title, {
    x: out.x,
    y: 2.3,
    w: 2.15,
    h: 0.35,
    fontSize: 12,
    fontFace: 'Arial',
    color: colors.foreground,
    bold: true,
    align: 'center',
  });

  slide8.addText(out.subtitle, {
    x: out.x,
    y: 2.6,
    w: 2.15,
    h: 0.25,
    fontSize: 9,
    fontFace: 'Arial',
    color: colors.foregroundSubtle,
    align: 'center',
  });

  slide8.addText(out.items.map(i => '• ' + i).join('\n'), {
    x: out.x + 0.1,
    y: 2.95,
    w: 1.95,
    h: 1.2,
    fontSize: 9,
    fontFace: 'Arial',
    color: colors.foregroundMuted,
  });

  slide8.addText(out.output, {
    x: out.x,
    y: 4.2,
    w: 2.15,
    h: 0.4,
    fontSize: 9,
    fontFace: 'Arial',
    color: out.color,
    align: 'center',
    bold: true,
  });
});

// Critical note
slide8.addShape(pptx.ShapeType.roundRect, {
  x: 0.5,
  y: 4.9,
  w: 9,
  h: 0.5,
  fill: { color: '1a0d00' },
  line: { color: colors.orange, width: 1 },
});

slide8.addText('CRITICAL: LIRA is a FACT-FINDER, not a decision-maker. Never provides hiring recommendations.', {
  x: 0.5,
  y: 4.95,
  w: 9,
  h: 0.4,
  fontSize: 12,
  fontFace: 'Arial',
  color: colors.orange,
  align: 'center',
});

// ============================================
// SLIDE 9: Leadership Traits Detail
// ============================================
const slide9 = addSlide('Leadership Traits Assessment', '15 traits across 4 quotients');

const quotients = [
  {
    name: 'COGNITIVE',
    count: '4 traits',
    traits: ['Strategic altitude', 'Data-driven orientation', 'Intellectual curiosity', 'Commercial acumen'],
    color: colors.green,
    x: 0.3,
  },
  {
    name: 'EMOTIONAL',
    count: '4 traits',
    traits: ['Self-awareness and balance', 'Transparent communication', 'Attract and retain talent', 'Circumstances around changes'],
    color: colors.orange,
    x: 2.55,
  },
  {
    name: 'DRIVE',
    count: '4 traits',
    traits: ['Strong drive to excel', 'Decisiveness w/ accountability', 'Numbers/target-driven', 'Risk-taking appetite'],
    color: colors.blue,
    x: 4.8,
  },
  {
    name: 'AGILITY',
    count: '3 traits',
    traits: ['Growth mindset', 'Succeeds across contexts', 'Makes transitions quickly'],
    color: colors.purple,
    x: 7.05,
  },
];

quotients.forEach((q) => {
  slide9.addShape(pptx.ShapeType.roundRect, {
    x: q.x,
    y: 1.5,
    w: 2.15,
    h: 3,
    fill: { color: colors.backgroundElevated },
    line: { color: q.color, width: 2 },
  });

  slide9.addText(q.name, {
    x: q.x,
    y: 1.6,
    w: 2.15,
    h: 0.4,
    fontSize: 16,
    fontFace: 'Arial',
    color: q.color,
    bold: true,
    align: 'center',
  });

  slide9.addText(q.count, {
    x: q.x,
    y: 2,
    w: 2.15,
    h: 0.3,
    fontSize: 11,
    fontFace: 'Arial',
    color: colors.foregroundSubtle,
    align: 'center',
  });

  slide9.addText(q.traits.map(t => '• ' + t).join('\n'), {
    x: q.x + 0.1,
    y: 2.4,
    w: 1.95,
    h: 2,
    fontSize: 10,
    fontFace: 'Arial',
    color: colors.foregroundMuted,
  });
});

// Output explanation
slide9.addText('Output: Conviction Level (HIGH | MEDIUM | LOW) + Supporting/Refuting Evidence', {
  x: 0.5,
  y: 4.7,
  w: 9,
  h: 0.4,
  fontSize: 14,
  fontFace: 'Arial',
  color: colors.foreground,
  align: 'center',
});

// ============================================
// SLIDE 10: Data Flow Summary
// ============================================
const slide10 = addSlide('Data Flow Summary', 'End-to-end architecture overview');

// Input
slide10.addShape(pptx.ShapeType.roundRect, {
  x: 3.5,
  y: 1.4,
  w: 3,
  h: 0.6,
  fill: { color: colors.backgroundElevated },
  line: { color: colors.border, width: 1 },
});
slide10.addText('Email / Chat Input', {
  x: 3.5,
  y: 1.45,
  w: 3,
  h: 0.5,
  fontSize: 14,
  fontFace: 'Arial',
  color: colors.foregroundMuted,
  align: 'center',
});

// Arrow 1
slide10.addText('▼', {
  x: 4.7,
  y: 2.05,
  w: 0.6,
  h: 0.4,
  fontSize: 20,
  color: colors.border,
  align: 'center',
});

// Agent
slide10.addShape(pptx.ShapeType.roundRect, {
  x: 2.5,
  y: 2.4,
  w: 5,
  h: 1,
  fill: { color: '001a0d' },
  line: { color: colors.green, width: 2 },
});
slide10.addText('LIRA Agent (12 Tools) • Claude Opus 4.5', {
  x: 2.5,
  y: 2.55,
  w: 5,
  h: 0.4,
  fontSize: 16,
  fontFace: 'Arial',
  color: colors.green,
  bold: true,
  align: 'center',
});
slide10.addText('← System Prompt + Context', {
  x: 2.5,
  y: 2.95,
  w: 5,
  h: 0.35,
  fontSize: 11,
  fontFace: 'Arial',
  color: colors.foregroundMuted,
  align: 'center',
});

// Arrow 2
slide10.addText('▼', {
  x: 4.7,
  y: 3.5,
  w: 0.6,
  h: 0.4,
  fontSize: 20,
  color: colors.border,
  align: 'center',
});

// Storage boxes
const flowStorages = [
  { name: 'SQL', sub: '(meta)', color: colors.blue, x: 2.5 },
  { name: 'Blob', sub: '(files)', color: colors.orange, x: 4.2 },
  { name: 'NFS', sub: '(fast I/O)', color: colors.green, x: 5.9 },
];

flowStorages.forEach((s) => {
  slide10.addShape(pptx.ShapeType.roundRect, {
    x: s.x,
    y: 3.9,
    w: 1.5,
    h: 0.8,
    fill: { color: colors.backgroundElevated },
    line: { color: s.color, width: 1 },
  });
  slide10.addText(s.name, {
    x: s.x,
    y: 3.95,
    w: 1.5,
    h: 0.45,
    fontSize: 14,
    fontFace: 'Arial',
    color: s.color,
    bold: true,
    align: 'center',
  });
  slide10.addText(s.sub, {
    x: s.x,
    y: 4.35,
    w: 1.5,
    h: 0.3,
    fontSize: 10,
    fontFace: 'Arial',
    color: colors.foregroundSubtle,
    align: 'center',
  });
});

// Arrow 3
slide10.addText('▼', {
  x: 4.7,
  y: 4.8,
  w: 0.6,
  h: 0.4,
  fontSize: 20,
  color: colors.border,
  align: 'center',
});

// Output
slide10.addShape(pptx.ShapeType.roundRect, {
  x: 2,
  y: 5.2,
  w: 6,
  h: 0.6,
  fill: { color: colors.backgroundElevated },
  line: { color: colors.purple, width: 1 },
});
slide10.addText('Evaluation Output: Screening Fit • Scorecard • Leadership • Questions Bank', {
  x: 2,
  y: 5.25,
  w: 6,
  h: 0.5,
  fontSize: 12,
  fontFace: 'Arial',
  color: colors.foregroundMuted,
  align: 'center',
});

// ============================================
// Save the presentation
// ============================================
const outputPath = './LIRA-Architecture.pptx';
pptx.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`✅ PowerPoint created successfully: ${outputPath}`);
  })
  .catch((err) => {
    console.error('Error creating PowerPoint:', err);
    process.exit(1);
  });
