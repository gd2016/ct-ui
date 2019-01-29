module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        'jsData': true,
        '$http': true,
        'TCYWXPAYSDK': true
    },
    env: {
        browser: true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        /*Possible Errors*/
        'no-new': 0,  // 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
        'no-cond-assign': 2, //禁止条件表达式中出现赋值操作符
        'no-constant-condition': 2, //禁止在条件中使用常量表达式
        'no-dupe-args': 2, //禁止 function 定义中出现重名参数
        'no-dupe-keys': 2, //禁止对象字面量中出现重复的 key
        'no-duplicate-case': 2, //禁止在 switch 语句中出现重复测试表达式的 case
        'no-empty': 2, //禁止出现空语句块
        'no-empty-character-class': 2, //禁止在正则表达式中使用空的字符集 []
        'no-func-assign': 2, //禁止对 function 声明重新赋值
        'no-inner-declarations': 0, //禁止在 if 代码块内出现函数声明
        'no-unexpected-multiline': 2, //禁止出现令人困惑的多行表达式
        'no-unreachable': 2, //禁止在return、throw、continue 和 break 语句之后出现不可达代码
        'use-isnan': 2, //禁止使用 isNaN() 检查 NaN
        'no-extra-semi': 2, //禁止不必要的分号
        'no-control-regex': 2, //禁止在正则表达式中使用控制字符
        'no-ex-assign': 2, //禁止对 catch 子句的参数重新赋值
        'no-extra-boolean-cast': 2, //禁止不必要的布尔类型转换，比如 !! 或 Boolean
        'no-regex-spaces': 2, //正则中避免使用多个空格
        'no-extra-parens': 2, //禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
        'no-invalid-regexp': 2, //禁止 RegExp 构造函数中存在无效的正则表达式字符串
        'no-obj-calls': 2, //禁止将 Math, JSON 或 Reflect 直接作为函数调用
        'no-sparse-arrays': 2, //禁止在数组中出现连续的逗号，如 let foo = [,,]
        'valid-typeof': 2, //用合法的字符串跟 typeof 进行比较操作
        /*最佳实践*/
        'accessor-pairs': 2, //强制 getter 和 setter 在对象中成对出现
        'curly': [2, 'multi-line'], //强制所有控制语句使用一致的括号风格
        'eqeqeq': 2, //要求使用 === 和 !==
        // 'no-alert': 2, //禁用 Alert
        'no-eval': 2, //禁用 eval()
        'no-self-assign': 2, //禁止自我赋值
        'semi': [2, 'always'], //结尾必须有分号
        'quotes': [
            2,
            'single',
            {avoidEscape: true, allowTemplateLiterals: true}
        ], //必须使用单引号，禁止使用双引号
        'key-spacing': [2, {beforeColon: false, afterColon: true}], //对象字面量中冒号前面禁止有空格，后面必须有空格
        'no-mixed-spaces-and-tabs': 2, //禁止混用空格和缩进
        'no-useless-escape': 0, //禁用不必要的转义字符
        'no-useless-call': 2, //避免不必要的.call() 和.apply()
        'no-multiple-empty-lines': 2, //禁止出现多行空行
        'no-fallthrough': 2, //switch 的 case 内必须有 break, return 或 throw
        'no-with': 2, //禁用 with 语句,
        'default-case': 2, //要求 switch 语句中有 default 分支
        'dot-notation': 2, //禁止出现 foo['bar']，必须写成 foo.bar
        'no-else-return': 2, //禁止 if 语句中 return 语句之后有 else 块
        'no-extend-native': 2, //禁止修改原生对象
        'no-octal': 2, //禁止使用 0 开头的数字表示八进制数
        'no-redeclare': 2, //禁止重复定义变量
        'no-extra-bind': 2, //禁止不必要的 .bind() 调用
        'no-implied-eval': 2, //禁止使用类似 eval() 的方法
        'no-proto': 2, //禁用 __proto__ 属性
        'no-return-assign': 2, //禁止在 return 语句中使用赋值语句
        'no-empty-pattern': 2, //禁止解构中出现空 {} 或 []
        'no-floating-decimal': 2, //表示小数时，禁止省略 0，比如 .5
        'no-throw-literal': 2, //禁止 throw 字面量，必须 throw 一个 Error 对象
        'no-unmodified-loop-condition': 2, //循环语句中注意更新循环变量
        /*Variables*/
        'no-undef': 2, //禁止使用未定义的变量
        'no-undef-init': 2, //禁止将 undefined 赋值给变量
        'no-unused-vars': 2, //不要留下未使用的变量
        'no-use-before-define': 2, //变量必须先定义后使用
        'no-delete-var': 2, //禁止使用 delete
        /*Stylistic Issues*/
        'brace-style': [2, '1tbs', {allowSingleLine: true}], //强制在代码块中使用一致的大括号风格 允许块的开括号和闭括号在 同一行
        'block-scoped-var': 0, //将 var 定义的变量视为块作用域，禁止在块外使用
        'one-var': [2, 'never'], //禁止变量申明时用逗号一次申明多个
        'camelcase': [2, {properties: 'always'}], //强制使用骆驼拼写法命名约定 强制属性名称为驼峰风格
        'space-before-function-paren': [
            2,
            {
                //函数名之后不能有空格
                anonymous: 'never', //针对匿名函数表达式
                named: 'never', //针对命名的函数表达式
                asyncArrow: 'never' //针对异步的箭头函数表达式
            }
        ],
        'comma-dangle': [2, 'never'], //禁止使用拖尾逗号
        'indent': [2, 4, {SwitchCase: 1}], //一个缩进必须用四个空格替代
        'padded-blocks': [2, 'never'], //代码块中避免多余留白
        'eol-last': 2, //要求文件末尾存在空行
        'no-tabs': 2, //不要使用制表符
        'keyword-spacing': 2, //关键字前后必须有空格
        'array-bracket-spacing': [2, 'never'], //禁止在数组方括号内有空格
        'block-spacing': [2, 'never'], //禁止在单行代码块中使用空格
        'comma-spacing': [2, {before: false, after: true}], //逗号后面有空格，前面无空格
        'space-in-parens': 2, //禁止圆括号内的空格
        'max-params': [2, 4], //函数的参数禁止超过 4 个
        'max-statements': [2, 50], //限制函数块中的语句的最大数量
        'quote-props': [2, 'consistent-as-needed'], //如果有属性名称要求使用引号，则所有的属性名称都要使用引号；否则，禁止所有的属性名称使用引号
        'dot-location': [2, 'property'], //强制在点号之前或之后换行 表达式中的点号操作符应该和属性在同一行
        'new-cap': [2, {newIsCap: true, capIsNew: false}], //要求构造函数首字母大写
        'new-parens': 2, //要求调用无参构造函数时有圆括号
        'func-names': 0, //要求或禁止使用命名的 function 表达式
        //'func-style': 2, //强制一致地使用 function 声明或表达式
        //"space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
        'space-before-function-paren': [0, "never"],
        'newline-after-var': [2, 'always'], //要求变量声明语句后有一行空行
        'no-array-constructor': 2, //禁止使用 Array 构造函数
        'no-caller': 2, //禁用 arguments.caller 或 arguments.callee
        'no-continue': 0, //禁用 continue 语句
        'no-multi-spaces': 2, //禁止使用多个空格
        'no-new-object': 2, //禁用 Object 的构造函数
        'no-new-wrappers': 2, //禁止使用 new 来生成 String, Number 或 Boolean
        'no-ternary': 0, //禁用三元操作符
        'no-self-compare': 2, //禁止将自己与自己比较
        'no-label-var': 2, //禁止 label 名称与定义过的变量重复
        'no-labels': 2, //禁止使用 label
        'no-lone-blocks': 2, // 禁止使用没必要的 {} 作为代码块
        'no-multi-str': 0, //禁止使用多行字符串
        'no-unneeded-ternary': 0, //如果有更好的实现，尽量不要使用三元表达式
        'no-unsafe-finally': 2, //禁止在 finally 中出现 return, throw, break 或 continue
        'no-whitespace-before-property': 2, //禁止属性前有空格，比如 foo. bar()
        'space-infix-ops': 2, //操作符左右必须有空格，比如 let sum = 1 + 2;
        'space-unary-ops': 0, //一元运算符后面跟一个空格
        'wrap-iife': 2, //自调用匿名函数 (IIFEs) 需要使用括号包裹
        'yoda': 0, //请书写优雅的条件语句
        /*ECMAScript 6*/
        'arrow-parens': 0,
        'no-class-assign': 2, //禁止对定义过的 class 重新赋值
        'no-const-assign': 2, //禁止对使用 const 定义的常量重新赋值
        'generator-star-spacing': 0, //强制 generator 函数中 * 号周围使用一致的空格
        'spaced-comment': 0, //强制在注释中 // 或 /* 使用一致的空格
        'no-duplicate-imports': 2, //禁止重复 import 模块
        'handle-callback-err': 0, //要求回调函数中有容错处理
        'comma-style': [2, 'last'], //强制使用一致的逗号风格
        'computed-property-spacing': [2, 'never'], // 用作对象的计算属性时，中括号内的首尾禁止有空格
        'constructor-super': 0, //要求在构造函数中有 super() 的调用
        'no-new-require': 2, //禁止直接 new require('foo')
        'no-dupe-class-members': 2, // 禁止重复定义类
        'no-this-before-super': 2, //禁止在 super 被调用之前使用 this 或 super
        'no-useless-computed-key': 2, //禁止出现没必要的计算键名，比如 let a = { ['0']: 0 }
        'no-new-symbol': 2, //禁止使用 new 来生成 Symbol
        'no-path-concat': 2, //禁止对 __dirname 或 __filename 使用字符串连接
        'no-useless-constructor': 2, //禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
        'prefer-const': 2, //要求使用 const 声明那些声明后不再被修改的变量,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'complexity': ['error', 6]
    }
};