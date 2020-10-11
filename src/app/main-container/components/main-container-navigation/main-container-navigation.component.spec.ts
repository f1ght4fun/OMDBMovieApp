import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainContainerNavigationComponent } from './main-container-navigation.component';

@Component({
  selector: 'app-movie-list',
  template: 'app-movie-list'
})
class MockMovieListComponent {}

describe('MainContainerNavigationComponent', () => {
  let component: MainContainerNavigationComponent;
  let fixture: ComponentFixture<MainContainerNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainContainerNavigationComponent, MockMovieListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MainContainerNavigationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
