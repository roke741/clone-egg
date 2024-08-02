import requests
import json
import os

def get_data(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

def save_json_data(file_path, data):
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)
    return "Guardado correctamente"

def get_data_from_url(id):
    url = f"https://api-widget.egg.live/api/v1/course-content/step/{id}"
    response = requests.get(url)
    response.raise_for_status()  
    data = response.json()
    return data

def main():
    data_temario = get_data('curso_full_stack/temario.json')

    modulos = data_temario['data']['plan']['modules']

    for modulo in modulos:
        print('Modulo:', modulo['title'])
        sections = modulo['sections']
        for section in sections:
            print('\tSeccion:', section['title'])
            lessons = section['steps']
            for lesson in lessons:
                print('\t\tLeccion:', lesson['title'])
                data_json = get_data_from_url(lesson['_id'])
                file_path = os.path.join('lecciones', f"Leccion_{lesson['_id']}.json")
                save = save_json_data(file_path, data_json)
                print('\t\t\t', save)

if __name__ == "__main__":
    main()
