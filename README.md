# Aplikacja Blogowa w Next.js

## Spis Treści
- [Wstęp](#wstęp)
- [Architektura Aplikacji](#architektura-aplikacji)
- [Proces Budowania i Deploymentu](#proces-budowania-i-deploymentu)
- [Testowanie](#testowanie)
- [Funkcjonalność Biznesowa](#funkcjonalność-biznesowa)
- [Storage i Bezpieczeństwo](#storage-i-bezpieczeństwo)
- [Monitoring i Logowanie](#monitoring-i-logowanie)

## Wstęp
Projekt aplikacji blogowej stworzonej w Next.js i wdrożonej jako Azure WebApp. Aplikacja pozwala na zarządzanie treścią bloga z poziomu interfejsu użytkownika oraz zapewnia bezpieczeństwo i monitoring działania systemu.

## Architektura Aplikacji
Aplikacja wykorzystuje:
- **Framework**: Next.js
- **Database**: MongoDB
- **Hosting**: Azure WebApp

## Proces Budowania i Deploymentu
- **Automatyzacja**: GitHub Actions
- **Workflow**: Budowanie aplikacji, testy jednostkowe, deployment przy aktualizacji brancha "main"

## Testowanie
- **Framework**: Jest
- **Proces**: Automatyczne uruchamianie testów jednostkowych w ramach GitHub Actions

## Funkcjonalność Biznesowa
- **Rejestracja i Logowanie**: Dostępne dla wszystkich użytkowników
- **Role Użytkowników**: Zwykły zalogowany użytkownik (przeglądanie postów), administrator (zarządzanie postami i użytkownikami)
- **Dostępność Treści**: Ograniczona dla niezalogowanych użytkowników

## Storage i Bezpieczeństwo
- **Database**: Cosmos MongoDB
- **Bezpieczeństwo**: System autoryzacji i autentykacji użytkowników

## Monitoring i Logowanie
- **Alerty**: Informowanie o błędach
- **Metryki**: Biznesowe i techniczne
- **Application Insights**: Zaawansowany monitoring aplikacji
