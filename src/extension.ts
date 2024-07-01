import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const provider = vscode.languages.registerCompletionItemProvider('pseudoyarn', {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
      const keywords = [
        'if', 'for', 'while', 'from', 'to', 'is', 'is not', 'ERROR', 'and', 'or', 'not', 'in', 'out', 'return', 'break', 'continue', 'function', 'class', 'method',
        'property', 'constructor', 'super', 'self', 'this', 'true', 'false', 'null', 'undefined', 'void', 'int', 'float', 'string', 'bool', 'array', 'object', 'any',
        'root', 'void', 'int', 'float', 'string', 'bool', 'array', 'object', 'any', 'true', 'false', 'null', 'undefined', 'self', 'this','else', 'else if', 'elif', 'elif not',
        'in', 'import', 'from', 'as', 'try', 'catch', 'finally', 'raise', 'throw', 'assert', 'pass', 'global', 'print', 'input', 'open', 'close', 'read', 'write', 'append', 'debug',
        'private', 'public', 'protected', 'static', 'constant', 'abstract', 'override', 'virtual', 'inherits', 'interface',

        'new', 'nil', '<=', '>=', '>', '<', '+', '-', '*', '/', '^', '!',
        '%', 'root', 'free', 'allocate', 'a++', 'a--', '//', '**', ':', '<-'
      ];

      const completionItems = keywords.map(keyword => {
        const item = new vscode.CompletionItem(keyword, vscode.CompletionItemKind.Keyword);
        return item;
      });

      return completionItems;
    }
  });

  context.subscriptions.push(provider);
}

export function deactivate() {}
