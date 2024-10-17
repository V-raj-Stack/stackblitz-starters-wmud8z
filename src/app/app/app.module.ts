import {
    Compiler,
    CompilerFactory,
    COMPILER_OPTIONS,
    NgModule,
  } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms';
  import { ReactiveFormsModule } from '@angular/forms';
  import { LocationStrategy, HashLocationStrategy } from '@angular/common';
  
  import { AppComponent } from './app.component';
//   import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
  
  @NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
      { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
      {
        provide: CompilerFactory,
        useClass: HashLocationStrategy,
        deps: [COMPILER_OPTIONS],
      },
      { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] },
    ],
  })
  export class AppModule {}
  
  export function createCompiler(compilerFactory: CompilerFactory) {
    return compilerFactory.createCompiler();
  }
  