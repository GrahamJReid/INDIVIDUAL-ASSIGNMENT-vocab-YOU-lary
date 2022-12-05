// import { getVocabulary } from '../../api/vocabularyData';
// import { vocabPay } from '../events/formEvents';
// import renderToDOM from '../utils/renderToDOM';

// eslint-disable-next-line import/no-mutable-exports
// let langlang = '';
// const selectVocabulary = (uid) => {
//   let domString = '';
//   getVocabulary(uid).then((authorsArray) => {
//     authorsArray.forEach((author) => {
//       // eslint-disable-next-line no-unused-vars
//       langlang += author.language;
//       if (langlang.includes(vocabPay)) {
//         console.warn('nothing');
//       } else {
//         console.warn(author);
//         domString += `

//       <option class="dropdown-item" id="newLanguage--${vocabPay}">${author.language}</option>

//           `;
//       }
//     });

//     domString += '</select>';

//     renderToDOM('#newLanguage', domString);
//   });
// };

// export { selectVocabulary, langlang };
