import { 
  users, 
  type User, 
  type InsertUser, 
  contacts, 
  type Contact, 
  type InsertContact,
  subscribers,
  type Subscriber,
  type InsertSubscriber,
  registrations,
  type Registration,
  type InsertRegistration
} from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form operations
  getContact(id: number): Promise<Contact | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Newsletter subscriber operations
  getSubscriber(id: number): Promise<Subscriber | undefined>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  
  // Registration operations
  getRegistration(id: number): Promise<Registration | undefined>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private subscribers: Map<number, Subscriber>;
  private registrations: Map<number, Registration>;
  
  private userIdCounter: number;
  private contactIdCounter: number;
  private subscriberIdCounter: number;
  private registrationIdCounter: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.subscribers = new Map();
    this.registrations = new Map();
    
    this.userIdCounter = 1;
    this.contactIdCounter = 1;
    this.subscriberIdCounter = 1;
    this.registrationIdCounter = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact methods
  async getContact(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }
  
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactIdCounter++;
    const createdAt = new Date();
    const contact: Contact = { ...insertContact, id, createdAt };
    this.contacts.set(id, contact);
    return contact;
  }
  
  // Subscriber methods
  async getSubscriber(id: number): Promise<Subscriber | undefined> {
    return this.subscribers.get(id);
  }
  
  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }
  
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.subscriberIdCounter++;
    const createdAt = new Date();
    const subscriber: Subscriber = { 
      ...insertSubscriber, 
      id, 
      active: true, 
      createdAt 
    };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
  
  // Registration methods
  async getRegistration(id: number): Promise<Registration | undefined> {
    return this.registrations.get(id);
  }
  
  async createRegistration(insertRegistration: any): Promise<Registration> {
    const id = this.registrationIdCounter++;
    const createdAt = new Date();
    
    // Handle the new ticket fields
    const registration: Registration = { 
      ...insertRegistration, 
      id,
      paymentStatus: "pending",
      ticketNumber: insertRegistration.ticketNumber || null,
      ticketIssued: insertRegistration.ticketIssued || false,
      createdAt 
    };
    
    this.registrations.set(id, registration);
    return registration;
  }
}

// Export singleton instance
export const storage = new MemStorage();
