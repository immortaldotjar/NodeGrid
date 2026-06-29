import React from 'react';
import NoteLabel from './NoteLabel';

const NoteInput = ({ title, ph, h, value, handleChange }) => (
  <div className="space-y-1.5">
    <NoteLabel text={title} />
    <textarea
      placeholder={ph}
      required
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      className="focus:outline-1 placeholder:text-zinc-300 placeholder:text-xs border text-xs text-wrap border-gray-300 p-2.5 w-full rounded resize-none"
      rows={h || 1}
    />
  </div>
);

export default NoteInput;
