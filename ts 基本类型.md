## ts 中的基础类型:
----
### 一 . 定义类型的方式
  > 1.声明变量语句: var | let | const 定义值;
  > 2.变量声明'类型明确'语句方程式: 声明变量关键词  变量名 : 变量类型  = 赋值操作; 代数形式: let[const [ var]] varName : string[ number .... ] = values;
  > 2.变量声明'类型推断'语句方程式: 声明变量关键词  变量名  = 赋值操作; 代数形式: let[const [ var]] varName  = values;

1. 基本数据类型: `boolean` , `number` ,`string` ,`null` ,`undefined` 
    ```typescript
        // 布尔类型
      let bool:boolean
      bool = true;
      // bool=123;
      let flag = false;

      // number 整数,小数;
      let num:number = 1.23;
      let num1=34;
      // 根据进制
      num=0b1101; // 0b 二进制
      num = 0o173;// 0o 八进制
      num=0x8f;// 0x 16进制;

      // 字符串类型
      let str = '1223455';
      let sttr:string= '我是我是';

      // 可以使用es6 中的模板字符串;
      sttr =`1234567890${sttr}`;
      console.log(sttr);

      // unll 和 undefined 类型
      let null1:null =null //该类型值必须是自身;
      let null1:undefined =undefined //该类型值必须是自身;

    ```
2. 复杂数据类型: `array<>`, `联合类型` (|) , `元祖类型`[type....] 

    ```typescript
      // 数组类型
      let arr:number[] = [5];
      
      // 写法2
      let array:Array<number>
      array=[1,2,3,4,5,6,7,8]
      
      // 联合类型
      // 第一个使用了' | ' 或运算,第二使用组合符号 '()' 代表是一个组合;
      // 值得类型可以是这个两个任意一个;
      // 无组合符号,执行 或运算符,该值类型为任意类型的一种,需要符合当前类型规则;
      let arr2:(string|number)[]=[];

      // 元祖类型
      // 类型为[] 运算,每一个类型下表对应值的类型规则,同时长度符合;
      let tuple:[string,number,boolean]=['a',1,true]
    ```

3. __枚举类型__ enum Xxx{once [= num1],....} -->使用方式与对象访问属性雷同;可以给元素添加自定序列号,自动累加;也可以,通过序列号当下标获取枚举中的字段键名,
    ```typescript
            // 枚举类型
        enum Roles{
          SUPER_ADMIN,
          ADMIN,
          USER
        }
        console.log(Roles.SUPER_ADMIN);
        console.log(Roles.ADMIN);
        console.log(Roles.USER);

        enum Adminstater{
          A = 2,
          B = 4,
          C = 6,
          D ,
          F = 8,
          G = 'a',
        }

        console.log(Adminstater.A);
        console.log(Adminstater.B);
        console.log(Adminstater.C);
        console.log(Adminstater.D);
        console.log(Adminstater.F);
        console.log(Adminstater.G);
    ```
4. ***`any`***[ 任意类型]
    ```typescript
      // any 类型使用
      let value:any = 123;
      value='ad';
      let arr3:any[];
      arr3 =[1,'a',true,null,undefined];
      console.log(arr3);
    ```

5. `void`类型 基本用于函数无返回值,可以赋值为 null 和 undefined;
    ```typescript
      // void 类型
      let voi:void  = null;
      let voi2:void =  undefined;
      // 相同类型为什么不相等那;
      // 而且 == 就可以;
      console.log('voi===voi2-->',voi===voi2);
      console.log('voi==voi2-->',voi==voi2);

      // 函数公式上使用该类型
      function add(unm:number):void {
        console.log(num);
        return undefined;
      }

      add(num);
    ```
6. `never`类型 ,无法执行下去的代码片段,无返回值的类型,如:跑出异常,死循环,never类型可以赋值给其他基础类型;

    ```typescript
      // never类型的使用;

      function abcs():never{
        throw new Error("我是错误的数据;");
      }

      // let  a:number = abcs();
      // console.log(a);

      let b:never;
      let c:number;
      c=b;
      console.log(c);
    ```
7. `object`类型;

8. __类型断言问题: 为了不让ts类型检查,给某个类型强制指定一个类型;__
    > 属于强制类型转换方式
    > 1. 方式一 : (<类型>断言变量名)   如:(<string>target).length
    > 2. 方式二 : (断言变量名 as 类型) 如:(target  as string).length

    ```typescript
      // 类型断言
      function pool(target:string|number):number{
        return target.toString().length;
      }
      console.log(pool(123456));
      function pool_err(str:string|number):number{
        if((<string>str).length||(str as string).length==0){ // as 在react中使用
              return (str as string).length;
        }
          return str.toString().length;
      }
      console.log(pool_err(23));
    ```
9. `Symbol` 类型; tsconfig 配置es6的库和其他库函数;独一无二,不相等"    "lib": ["ES6","DOM"],"
    > 1. 使用方式 : 直接调用 `Symbol()`方法;
    > 2. 可以在调用时传入一个字符串 `Symbol(string|number|obj)`,在写入过后,会自动转换为字符串;
    > 3. 它的值不可以与其他类型的值做运算;
    > 4. 它的值可以和`(string|boolean)`类型转换 不能和数字做类型转化;
    > 5. `Symbol` 作为属性名,使用es6中键运算符"[]"; 
        1).//操作属性值和查询属性值 必须使用 [] 运算符;
        2).// 对象遍历问题 无法获取到Symbol类型的键名;
        3).// 使用对象的函数也无法获取到Symbol类型的值; keys||getOwnPropertyNames;
        4).//获取Symbol值得方法有:
            Object.getOwnPropertySymbols(info);
            Reflect.oenKeys(info); es6中提供了一个反射类型;
    > 6. Symbol的静态方法:
       1)Symbol.for("lison");同名创建,会先查找相同类型返回;存在直接 返回,不存在返回新创建Symbol值;
       2)Symbol.keyFor(Symbol变量名);根据变量名称全局寻找 Symbol.for创建时的别名;
    
     > 7. Symbol的内置值 11 个; 
         1)Symbol.hasInstance 属性 ,当用户使用 instanceof  时,就会调用以Symbol.hasInstance为名称的函数;
         2)Symbol.isConcatSpreadable 可读写的boolean值, 当用户使用数组的concat时,不会被拆开,使用方式:arrrr1[Symbol.isConcatSpreadable]=false;
         3)Symbol.species 函数名; 指定一个创建延伸对象的构造函数;
          对象里添加 => static [Symbol.species](){return Object;}
         4)Symbol.match 当字符串调用match函数时,传入一个写有给属性的函数对象,会调用指向传入该对象的函数方法,[match函数的重写];
         5)Symbol.replace 当字符串调用replace函数时,传入一个写有给属性的函数对象,会调用指向传入该对象的函数方法,[replace函数的重写];
         6)Symbol.search 当字符串调用search函数时,传入一个写有给属性的函数对象,会调用指向传入该对象的函数方法,[search函数的重写];
         7)Symbol.split 当字符串调用split函数时,传入一个写有给属性的函数对象,会调用指向传入该对象的函数方法,[split函数的重写];
         列如:const Xxx={[Symbol.split](str){操作代码块;}} "xxxx".split(<any>Xxx);
         8)Symbol.iterator 用于返回一个数组的遍历器对象 列如:  const iterator=arr[Symbol.iterator]();用于编列数据;
         9)Symbol.toPrimitive 用于对象类型转化时返回转换的类型值
         10)Symbol.toStringTag 对象中当属性值或者函数使用,指定值或者返回值时,当对象调用自己的toString方法时,返回该值字符串拼接;
         11)Symbol.unscopables  // 获取原形对象上with环境
            with(对象实例||数组){
           // 可以直接使用 实例对象中的 键名获取值,和方法;
         }

    ```typescript
        // Symbol 类型;
        const ss= Symbol();
        console.log(ss);

        const s1 = Symbol('lison');
        console.log(s1);

        const s2 = Symbol(123);
        console.log(s2);

        // const  s3 = Symbol({a:12});
        // console.log(s2+"123");//报错
        console.log(s2.toString());
        console.log(!s2);
        console.log(Boolean(s2));
        console.log(void(s2)); // undefined
        // console.log(any(s2)); //Cannot convert a Symbol value to a any
        // console.log(undefined|null(s2));不行
        // console.log(never(s2));//Cannot convert a Symbol value to a never
        // console.log(Number(s2));//Cannot convert a Symbol value to a number

        const s5 =Symbol("name");
        const popr = "address";
        const info={
          [s5] :'lison',
          age:12,
          gender:'男',
          [popr] :'china'
        }

        console.log(info);
        //操作属性值和查询属性值
        info[s5] = 'hello Symbol';

        console.log(info[s5]);

        // 对象遍历问题 无法获取到Symbol类型的键名;
        for(let key in info){
          console.log(key);
        }
        // 使用对象的函数也无法获取到Symbol类型的值;
        console.log(Object.keys(info)); // 获取对象多有键名
        console.log(Object.getOwnPropertyNames(info)); // 打印对象的键名

        // 可以使用 Object.getOwnPropertySymbols()来打印;
        console.log(Object.getOwnPropertySymbols(info));
        console.log(Reflect.ownKeys(info));

        // Symbol   的高阶用法 

        const s6 =Symbol.for('lison');
        // console.log(s6==s1);// 返回第一创建的lison别名值;相同返回 true;

        const ss1=Symbol.keyFor(s5);
        console.log(ss1);

        // 1)Symbol.hasInstance 属性 
        const Person={
          [Symbol.hasInstance]:(other:Object):void=>{
              console.log('调用函数Symbol.hasInstance',other);
          }
        }
        // 当用户使用Instanceof 检查该对象时 调用该函数,
        console.log({a:'123'} instanceof <any>Person);

        //  2)Symbol.isConcatSpreadable 可读写的boolean值, 当用户使用数组的concat时,不会被拆开,
        // 当数据进行拼接时不忘某个数组被扁平化,给这个数组设置这个参数
        let arrrr1 =[1,2,3,4,5];
        let arrrr2 =[1,2,3,4,5];
        // let arrrr2 =['1',"2","3","4","5"];
        console.log(arrrr1[Symbol.isConcatSpreadable]);
        arrrr1[Symbol.isConcatSpreadable]=false;
        console.log([].concat(arrrr1,arrrr2)); //效果: [Array(5), 1, 2, 3, 4, 5]
        arrrr2[Symbol.isConcatSpreadable]=true; // 无效果
        console.log([].concat(arrrr1,arrrr2));
        // console.log(arrrr1.concat((arrrr2 as number[]));

        
    ```

