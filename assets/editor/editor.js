import { EditorView } from 'codemirror'
import { indentWithTab, defaultKeymap, history, historyKeymap } from '@codemirror/commands'
import { markdown } from '@codemirror/lang-markdown'
import {
  keymap, highlightSpecialChars, drawSelection, highlightActiveLine, dropCursor,
  rectangularSelection, crosshairCursor
} from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { defaultHighlightStyle, syntaxHighlighting, indentOnInput, bracketMatching, foldKeymap } from '@codemirror/language'
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search'
import { autocompletion, completionKeymap, closeBrackets, closeBracketsKeymap } from '@codemirror/autocomplete'
import { lintKeymap } from '@codemirror/lint'
import { frontmatter } from '@retronav/ixora'

export function setup () {
  const textarea = document.querySelector('.eagle-editor textarea[name=content]')
  if (textarea) {
    const editor = new EditorView({
      doc: textarea.value,
      extensions: [
        highlightSpecialChars(),
        history(),
        drawSelection(),
        dropCursor(),
        EditorState.allowMultipleSelections.of(true),
        indentOnInput(),
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        bracketMatching(),
        closeBrackets(),
        autocompletion(),
        rectangularSelection(),
        crosshairCursor(),
        highlightActiveLine(),
        highlightSelectionMatches(),
        keymap.of([
          ...closeBracketsKeymap,
          ...defaultKeymap,
          ...searchKeymap,
          ...historyKeymap,
          ...foldKeymap,
          ...completionKeymap,
          ...lintKeymap,
          indentWithTab
        ]),
        EditorView.lineWrapping,
        EditorView.contentAttributes.of({
          spellcheck: true,
          autocapitalize: 'sentences',
          autocorrect: 'on'
        }),
        markdown({
          extensions: [
            frontmatter
          ]
        })
      ]
    })

    textarea.parentNode.insertBefore(editor.dom, textarea)
    textarea.style.display = 'none'

    if (textarea.form) {
      textarea.form.addEventListener('submit', () => {
        textarea.value = editor.state.doc.toString()
      })
    }
  }
}
