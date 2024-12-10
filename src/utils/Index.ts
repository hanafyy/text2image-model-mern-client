import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants/constants";

export function getRandomPrompt(prompt: any) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id: any, photo: any) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
