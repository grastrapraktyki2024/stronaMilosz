# Dokumentacja API: Konwerter Walut
### Opis
- To jednoendpointowe API umożliwia przeliczanie kwoty w PLN na EUR według stałego kursu (1 EUR = 4.2 PLN). API loguje datę żądania, otrzymane dane oraz swoją odpowiedź do bazy danych MongoDB.

## Endpointy
- GET /convert-currency
### Opis
- Endpoint przelicza kwotę podaną w PLN na EUR według stałego kursu.

## Logowanie
- Każde zapytanie jest logowane w bazie MongoDB z następującymi danymi:
- Data i czas żądania
- Otrzymana kwota PLN
- Wynik w EUR

## Dokumentacja Swagger
- API zawiera dokumentację Swagger dostępną pod localhost:3000/api.
## Dokumentacja Frontend: Angular
### Opis
- Prosta aplikacja Angular umożliwia użytkownikowi wpisanie kwoty w PLN i przeliczenie jej na EUR.

## Struktura komponentu
- Tytuł: "Zamiana Walut"
- Elementy UI:
- Pole <input> do wprowadzania kwoty w PLN
- Przycisk "Przelicz"
- Div do wyświetlenia wyniku
