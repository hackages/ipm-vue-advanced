import Vue from 'vue';

Vue.directive('hc-if', function(el, binding, vNode) {
  !binding.value ? commentNode(el, vNode) : null;
});

function commentNode(el, vnode) {
  const comment = document.createComment('');

  vnode.text = 'It is my custom if :)';
  vnode.elm = comment;
  vnode.isComment = true;
  vnode.context = undefined;
  vnode.tag = undefined;
  vnode.data.directives = undefined;
}
