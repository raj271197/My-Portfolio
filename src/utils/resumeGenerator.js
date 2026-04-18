import { jsPDF } from 'jspdf';
import { getResumeData } from './resumeData';

const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN_X = 16;
const MARGIN_TOP = 16;
const MARGIN_BOTTOM = 14;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;
const BODY_FONT_SIZE = 9.5;
const BODY_LINE_HEIGHT = 4.6;

const addPageIfNeeded = (doc, cursorY, requiredHeight = BODY_LINE_HEIGHT) => {
  if (cursorY + requiredHeight <= PAGE_HEIGHT - MARGIN_BOTTOM) {
    return cursorY;
  }

  doc.addPage();
  return MARGIN_TOP;
};

const writeWrappedText = (doc, text, x, y, width, options = {}) => {
  const {
    fontSize = BODY_FONT_SIZE,
    fontStyle = 'normal',
    lineHeight = BODY_LINE_HEIGHT,
  } = options;

  doc.setFont('helvetica', fontStyle);
  doc.setFontSize(fontSize);

  const lines = Array.isArray(text) ? text : doc.splitTextToSize(text, width);
  const requiredHeight = Math.max(lines.length, 1) * lineHeight;
  const nextY = addPageIfNeeded(doc, y, requiredHeight);

  doc.text(lines, x, nextY);
  return nextY + requiredHeight;
};

const drawDivider = (doc, y) => {
  const nextY = addPageIfNeeded(doc, y, 2);
  doc.setDrawColor(0);
  doc.setLineWidth(0.3);
  doc.line(MARGIN_X, nextY, PAGE_WIDTH - MARGIN_X, nextY);
  return nextY + 4;
};

const writeSectionHeading = (doc, label, y) => {
  const nextY = addPageIfNeeded(doc, y, 8);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.text(label.toUpperCase(), MARGIN_X, nextY);
  return drawDivider(doc, nextY + 2);
};

const writeBulletList = (doc, items, y, indent = 2.7) => {
  let cursorY = y;

  items.forEach((item) => {
    const wrapped = doc.splitTextToSize(item, CONTENT_WIDTH - 6);
    cursorY = addPageIfNeeded(doc, cursorY, wrapped.length * BODY_LINE_HEIGHT + 1);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(BODY_FONT_SIZE);
    doc.text('-', MARGIN_X + indent, cursorY);
    doc.text(wrapped, MARGIN_X + indent + 3, cursorY);
    cursorY += wrapped.length * BODY_LINE_HEIGHT + 0.6;
  });

  return cursorY;
};

export const downloadResumePdf = async (variant = 'developer') => {
  const resume = getResumeData(variant);
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  doc.setProperties({
    title: `${resume.name} ${resume.title} Resume`,
    subject: `${resume.title} ATS resume`,
    author: resume.name,
  });

  let y = MARGIN_TOP;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text(resume.name, MARGIN_X, y);
  y += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.text(resume.title, MARGIN_X, y);
  y += 6;

  resume.contactLines.forEach((line) => {
    y = writeWrappedText(doc, line, MARGIN_X, y, CONTENT_WIDTH, {
      fontSize: 9,
      lineHeight: 4.2,
    });
  });

  y = drawDivider(doc, y + 1);

  y = writeSectionHeading(doc, 'Professional Summary', y);
  y = writeWrappedText(doc, resume.summary, MARGIN_X, y, CONTENT_WIDTH);
  y += 2.5;

  y = writeSectionHeading(doc, 'Skills', y);
  resume.skills.forEach((group) => {
    y = writeWrappedText(doc, group.title, MARGIN_X, y, CONTENT_WIDTH, {
      fontStyle: 'bold',
      fontSize: 9.4,
    });
    y = writeWrappedText(doc, group.items.join(', '), MARGIN_X, y, CONTENT_WIDTH, {
      fontSize: 9.1,
    });
    y += 1.8;
  });

  y = writeSectionHeading(doc, 'Experience', y);
  resume.experience.forEach((job) => {
    y = writeWrappedText(doc, `${job.role} | ${job.company}`, MARGIN_X, y, CONTENT_WIDTH, {
      fontStyle: 'bold',
      fontSize: 10,
      lineHeight: 4.8,
    });
    y = writeWrappedText(doc, `${job.period} | ${job.type}`, MARGIN_X, y, CONTENT_WIDTH, {
      fontSize: 9,
      lineHeight: 4.2,
    });
    y = writeBulletList(doc, job.points, y + 0.8);
    y += 1.7;
  });

  y = writeSectionHeading(doc, 'Projects', y);
  resume.projects.forEach((project) => {
    y = writeWrappedText(doc, project.title, MARGIN_X, y, CONTENT_WIDTH, {
      fontStyle: 'bold',
      fontSize: 10,
    });
    y = writeWrappedText(doc, project.description, MARGIN_X, y, CONTENT_WIDTH, {
      fontSize: 9.1,
    });
    y = writeWrappedText(doc, `Tech Stack: ${project.stack.join(', ')}`, MARGIN_X, y, CONTENT_WIDTH, {
      fontSize: 9.1,
    });
    y = writeWrappedText(
      doc,
      `GitHub: ${project.githubLabel}${project.demoLabel ? ` | Demo: ${project.demoLabel}` : ''}`,
      MARGIN_X,
      y,
      CONTENT_WIDTH,
      { fontSize: 8.9 },
    );
    y += 1.8;
  });

  y = writeSectionHeading(doc, 'Education', y);
  resume.education.forEach((item) => {
    y = writeWrappedText(doc, `${item.title} | ${item.institution}`, MARGIN_X, y, CONTENT_WIDTH, {
      fontStyle: 'bold',
      fontSize: 9.8,
    });
    y = writeWrappedText(doc, item.period, MARGIN_X, y, CONTENT_WIDTH, {
      fontSize: 9,
      lineHeight: 4.2,
    });
    y = writeWrappedText(doc, item.details, MARGIN_X, y, CONTENT_WIDTH, {
      fontSize: 9,
    });
    y += 1.5;
  });

  y = writeSectionHeading(doc, 'Certifications', y);
  writeBulletList(doc, resume.certifications, y);

  doc.save(resume.fileName);
};
