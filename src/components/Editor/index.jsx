import { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';

// #2 register module
Quill.register('modules/imageUploader', ImageUploader);

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  modules = {
    // #3 Add "image" to the toolbar
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['link', 'image'],
    ],
    // # 4 Add module and upload function
    imageUploader: {
      upload: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png'
            );
          }, 1000);
        });
      },
    },
  };

  render() {
    const { value = '', setValue = () => {} } = this.props;
    return (
      <ReactQuill
        placeholder='Enter your contents here ...'
        value={value}
        onChange={setValue}
        theme='snow'
        modules={this.modules}
      />
    );
  }
}

Editor.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default Editor;
