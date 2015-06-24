export default function ({ Plugin, types: t }) {
  return new Plugin("minify-booleans", {
    metadata: {
      group: "builtin-pre"
    },
    
    visitor: {
      Literal(node) {
        if (typeof node.value === "boolean") {
          return t.unaryExpression("!", t.literal(+!node.value), true);
        }
      }
    }
  });
}
