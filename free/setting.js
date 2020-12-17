function EditorViewer1__init() {
  var viewer = new toastui.Editor.factory({
    el: document.querySelector('#editor-viewer-1'),
    initialValue: "# 안녕",
    viewer:true
  });

  $('.editor-viewer-1__btn-set-markdown').click(function() {
    viewer.setMarkdown('# 하하');
  });
}
EditorViewer1__init();