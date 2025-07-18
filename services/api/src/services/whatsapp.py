from logging import INFO, basicConfig, getLogger
from os import environ

from src.http import post

basicConfig(level=INFO)

_WHATSAPP_CLOUD_API_ACCESS_TOKEN = environ.get("WHATSAPP_CLOUD_API_ACCESS_TOKEN")
_WHATSAPP_CLOUD_BASE_API_URL = environ.get("WHATSAPP_CLOUD_BASE_API_URL")
_WHATSAPP_PHONE_NUMBER_ID = environ.get("WHATSAPP_PHONE_NUMBER_ID")

assert all(
    (
        _WHATSAPP_CLOUD_API_ACCESS_TOKEN,
        _WHATSAPP_CLOUD_BASE_API_URL,
        _WHATSAPP_PHONE_NUMBER_ID,
    )
)
# TODO: Remove trailing slashes
URL = f"{_WHATSAPP_CLOUD_BASE_API_URL}/{_WHATSAPP_PHONE_NUMBER_ID}/messages"

headers = {
    "Authorization": f"Bearer {_WHATSAPP_CLOUD_API_ACCESS_TOKEN}",
    "Content-Type": "application/json",
}


async def send_whatsapp_otp(recipient_phone_number: str, otp_code: str):
    print(f" ============================{otp_code}")
    return True
    # TODO: Add country code
    LOGGER.info(f"Sending OTP via WhatsApp to {recipient_phone_number}")
    payload = {
        "messaging_product": "whatsapp",
        "to": recipient_phone_number.lstrip("+"),
        "type": "template",
        "template": {
            "name": "hello_world",
            "language": {"code": "en_US"},
        },
    }
    response = await post(URL, json=payload, headers=headers)
    response.raise_for_status()
    return (
        True
        if response.json()["messages"][0]["message_status"] == "accepted"
        else False
    )


LOGGER = getLogger(__name__)
