import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText: string = '';
  articles = [
    {
      title: 'The Rise of Remote Work',
      content: 'Over the past decade, remote work has transitioned from a rare perk to a standard way of working...'
    },
    {
      title: 'The Importance of Mental Health Awareness',
      content: 'Mental health has become a crucial topic of discussion in recent years, as more people recognize...'
    },
    {
      title: 'Sustainable Living: A Guide to Reducing Your Carbon Footprint',
      content: 'Living sustainably is no longer a trend but a necessity. From reducing plastic use to adopting...'
    },
    {
      title: 'The Evolution of Electric Cars',
      content: 'Electric cars have come a long way since their inception. What began as a niche product has now...'
    },
    {
      title: 'Mastering Time Management: Tips for Maximizing Productivity',
      content: 'Time management is a skill that can drastically improve your productivity, allowing you to...'
    },
    {
      title: 'A Beginner\'s Guide to Meditation',
      content: 'Meditation is a powerful tool for managing stress, improving focus, and enhancing mental clarity...'
    },
    {
      title: 'The Future of Space Exploration',
      content: 'Space exploration is entering an exciting new era with advancements in technology and growing...'
    },
    {
      title: 'Building Resilience: How to Bounce Back from Challenges',
      content: 'Resilience is the ability to recover quickly from adversity. In today’s fast-paced world...'
    },
    {
      title: 'Exploring the Benefits of Minimalism',
      content: 'Minimalism is about living with less to create more space for what truly matters...'
    },
    {
      title: 'The Power of Networking in the Digital Age',
      content: 'In today’s interconnected world, networking is more important than ever. With tools like LinkedIn...'
    }
  ];

  get filteredArticles() {
    if (!this.searchText) {
      return this.articles;
    }
    const searchLower = this.searchText.toLowerCase();
    return this.articles.filter(article =>
      article.title.toLowerCase().includes(searchLower) ||
      article.content.toLowerCase().includes(searchLower)
    );
  }

  highlightText(text: string, search: string) {
    if (!search) {
      return text;
    }
    const regex = new RegExp(`${search}`, 'gi'); 
    return text.replace(regex, (matched) => `<mark>${matched}</mark>`);
  }
  
  get numberOfResults() {
    return this.filteredArticles.length;
  }
  clearSearch() {
    this.searchText = '';}
}