import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';
const modules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    [{ list: 'check' }, { list: 'ordered' }, { list: 'bullet' }],
    ['clean'],
  ],
};

const formats = ['bold', 'italic', 'underline', 'list', 'bullet', 'check'];

export default function QuillEditorWithTasks({ value, onChange, theme = 'snow', className }) {

   useEffect(() => {
    const editor = document.querySelector('.ql-editor');
    if (editor) {
      editor.setAttribute('spellcheck', 'false');
    }
  }, []);

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      theme={theme}
      className={className}
      spellCheck={false}
    />
  );
}
