/// <reference path="../../../../typings/index.d.ts"/>

import {HeaderComponent} from './HeaderComponent';
import {TestBed, async} from '@angular/core/testing';

describe('header component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render \'Header\'', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const header = fixture.nativeElement;
    expect(header.querySelector('span').textContent.trim()).toBe('Header');
  });
});
